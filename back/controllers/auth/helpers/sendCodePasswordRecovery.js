import mongoose from 'mongoose';
import { randomBytes } from 'crypto';
import { logger, sendMail, sendMessage, sendError, sendSuccess } from '~/utils';
import { status } from '~/constants';
import { UserSchema } from '~/schemas/User';

export const sendCodePasswordRecovery = async (request, response) => {
	//  Codes that we might return coming from status
	const { UNAUTHROIZED } = status;

	//  Destructuring email from headers
	const { email } = request.headers;

	try {
		//  Making sure that the user exists
		const isExisting = await UserSchema.findOne({ email }, { _id: 1 });

		if (!isExisting)
			return sendMessage('Email does not exist', response, UNAUTHROIZED);

		//  Expiring all the previously sent otps of the same user
		await UserSchema.updateMany(
			{
				'otps.status': 'sent',
				// eslint-disable-next-line no-underscore-dangle
				_id: new mongoose.Types.ObjectId(isExisting._id),
			},
			{ $set: { 'otps.$.status': 'expired' } },
		);

		//  Generating the new otp
		const code = await randomBytes(30).toString('hex');
		const newOtp = {
			code,
			expiration_timestamp: Date.now() + 3600000,
		};

		//  Saving new otp in the Schema
		await UserSchema.updateOne(
			// eslint-disable-next-line no-underscore-dangle
			{ _id: isExisting._id },
			{ $addToSet: { otps: newOtp } },
		);

		//  Creating html template to sent in email
		const HtmlTemplate = `
                          <!DOCTYPE html>
                      <html lang="en-US">
                        <head>
                          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                          <title>Reset Password Email Template</title>
                          <meta name="description" content="Reset Password Email Template." />
                          <style type="text/css">
                            a:hover {
                              text-decoration: underline !important;
                            }
                          </style>
                        </head>
                        <body
                          marginheight="0"
                          topmargin="0"
                          marginwidth="0"
                          style="margin: 0px; background-color: #f2f3f8"
                          leftmargin="0"
                        >
                          <!--100% body table-->
                          <table
                            cellspacing="0"
                            border="0"
                            cellpadding="0"
                            width="100%"
                            bgcolor="#f2f3f8"
                            style="
                              @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
                              font-family: 'Open Sans', sans-serif;
                            "
                          >
                            <tr>
                              <td>
                                <table
                                  style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
                                  width="100%"
                                  border="0"
                                  align="center"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <td style="height: 80px">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                        <img
                                          width="60"
                                          src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png"
                                          title="logo"
                                          alt="logo"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="height: 20px">&nbsp;</td>
                                  </tr>

                                  <tr>
                                    <td>
                                      <table
                                        width="95%"
                                        border="0"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                          max-width: 670px;
                                          background: #fff;
                                          border-radius: 3px;
                                          text-align: center;
                                          -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                                          -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                                          box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                                        "
                                      >
                                        <tr>
                                          <td style="height: 40px">&nbsp;</td>
                                        </tr>
                                        <tr>
                                          <td style="padding: 0 35px">
                                            <h1
                                              style="
                                                color: #1e1e2d;
                                                font-weight: 500;
                                                margin: 0;
                                                font-size: 32px;
                                                font-family: 'Rubik', sans-serif;
                                              "
                                            >
                                              You have requested to reset your password
                                            </h1>
                                            <span
                                              style="
                                                display: inline-block;
                                                vertical-align: middle;
                                                margin: 29px 0 26px;
                                                border-bottom: 1px solid #cecece;
                                                width: 100px;
                                              "
                                            ></span>
                                            <p
                                              style="
                                                color: #455056;
                                                font-size: 15px;
                                                line-height: 24px;
                                                margin: 0;
                                              "
                                            >
                                              We cannot simply send you your old password. A unique
                                              code to reset your password has been generated for you.
                                              To reset your password, click the following link and
                                              enter the following code.
                                            </p>
                                          
                                            <a
                                              href="${process.env.FRONTEND_URL}/reset-password/${code}"
                                              style="
                                                background: #20e277;
                                                text-decoration: none !important;
                                                font-weight: 500;
                                                margin-top: 35px;
                                                color: #fff;
                                                text-transform: uppercase;
                                                font-size: 14px;
                                                padding: 10px 24px;
                                                display: inline-block;
                                                border-radius: 50px;
                                              "
                                              >Reset Password</a
                                            >
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="height: 40px">&nbsp;</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td style="height: 20px">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td style="height: 80px">&nbsp;</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--/100% body table-->
                        </body>
                      </html>
    `;

		//  Invoking the email sent method
		const result = await sendMail(
			email,
			'Password Recovery',
			'Password Recovery Code: **************',
			HtmlTemplate,
		);

		//  Sending response in case everything went well!
		if (result.length > 0 && result[0]?.statusCode)
			return sendSuccess(
				{
					otp: code,
					message: 'Otp sent please check your email',
				},
				response,
			);
		// In case we failed
		return sendError('Try Again', response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
