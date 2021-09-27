import express from 'express';
import { auth } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.post(
	'/register',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				email: request.body.email,
				password: request.body.password,
				confirmPassword: request.body.confirmPassword,
				name: request.body.name,
			},
			{
				name: 'required',
				'name.first': 'required|string',
				'name.last': 'required|string',
				email: 'required|string|email',
				password:
					'required|string|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/',
				confirmPassword: 'required|same:password',
			},
			{
				'regex.password': `Password should have:
        At least one upper case 
        At least one lower case
        At least one digit
        At least one special character`,
			},
		);
	},
	auth.registerUser,
);

router.post(
	'/login',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				email: request.body.email,
				password: request.body.password,
			},
			{
				email: 'required|string|email',
				password: 'required|string',
			},
		);
	},
	auth.loginUser,
);

router.put(
	'/refresh-session',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				refreshToken: request.get('refreshToken'),
			},
			{
				refreshToken: 'required|string',
			},
		);
	},
	auth.refreshSession,
);

router.patch(
	'/forgot-password',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				email: request.headers.email,
			},
			{
				email: 'required|string|email',
			},
		);
	},
	auth.sendCodePasswordRecovery,
);

router.patch(
	'/reset-password',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				otp: request.body.otp,
				password: request.body.password,
				confirmPassword: request.body.confirmPassword,
			},
			{
				otp: 'required|string',
				password:
					'required|string|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/',
				confirmPassword: 'required|same:password',
			},
		);
	},
	auth.resetPassword,
);

module.exports = router;
