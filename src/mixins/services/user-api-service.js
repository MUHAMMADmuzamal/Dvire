import HttpApiService from './http-api-services';
import {APP_SETTINGS} from '../../../config';
const PATH = APP_SETTINGS.API_PATH.USERS;
class UsersApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getAllUsers() {
		return this.get(PATH.AllUsers);
	}
	async updateUser(user) {
		return this.update(PATH.Users+`/${user.id}`, user);
	}
	async addUser(user) {
		return this.post(PATH.Users, user);
	}
	async deleteUser(user) {
		return this.delete(PATH.Users,user.id);
	}
}

export default UsersApiService;
