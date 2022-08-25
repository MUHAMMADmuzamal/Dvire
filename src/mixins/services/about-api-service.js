import HttpApiService from './http-api-services';
import {APP_SETTINGS} from '../../../config';
const PATH = APP_SETTINGS.API_PATH.ABOUT;
class AboutApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getData() {
		return this.get(PATH.About);
	}
	async updateData(about) {
		return this.update(PATH.About+`/${about.id}`, about);
	}
	async addData(about) {
		return this.post(PATH.About, about);
	}
	async deleteData(post) {
		return this.delete(PATH.About,about.id);
	}
}

export default AboutApiService;
