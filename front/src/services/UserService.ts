import { ApiService } from '@/services/ApiServices';
import LoginModel from '../interfaces/LoginModel';

export default class UserService {
    static baseUrl = ['auth', 'users'];

    static async loginUser(user: LoginModel) {
        try {
            const data = await ApiService.post(
                `${UserService.baseUrl[0]}/login`,
                user
            );
            return data.results.token.access_token;
        } catch (error) {
            console.log(error);
        }
    }
 
    static async getUsers() {
        try {
            const data = await ApiService.get(UserService.baseUrl[1])
            return data.results.data
        } catch (error) {
            console.log(error);
        }
    }

}
