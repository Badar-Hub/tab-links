import { ApiService } from '@/services/ApiServices';
import UserModel from '../interfaces/UserModel';

export default class UserService {
    static baseUrl = 'auth';

    static async loginUser(user: UserModel) {
        try {
            const data = await ApiService.post(
                `${UserService.baseUrl}/login`,
                user
            );
            return data.results.token.access_token;
        } catch (error) {
            console.log(error);
        }
    }

}
