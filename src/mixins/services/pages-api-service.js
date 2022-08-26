import HttpApiService from './http-api-services';
class PagesApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getData(path) {
		return this.get(path);
	}
	async updateData(path,page) {
		return this.update(path, page);
		// return this.update(path+`/${page.id}`, page);
	}
	async addData(path,page) {
		return this.post(path, page);
	}
	async deleteData(path,page) {
		return this.delete(path,page.id);
	}
}

export default PagesApiService;
