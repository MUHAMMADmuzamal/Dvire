import HttpApiService from './http-api-services';
class PagesApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getPages(path) {
		return this.get(path);
	}
	async updatePageData(path,page) {
		return this.update(path+`/${page.id}`, page);
		// return this.update(path+`/${page.id}`, page);
	}
	async addPageData(path,page) {
		return this.post(path, page);
	}
	async deletePage(path,page) {
		return this.delete(path,page.id);
	}
}

export default PagesApiService;
