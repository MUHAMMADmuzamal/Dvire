import HttpApiService from '../services/http-api-services';
import {APP_SETTINGS} from '../../../config';
const PATH = APP_SETTINGS.API_PATH.NEWS;
class NewsApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getAllNews() {
		return this.get(PATH.News);
	}
	async getNews(id) {
		return this.get(PATH.News+`/${id}`);
	}
	async updateNews(news) {
		return this.update(PATH.News+`/${news.id}`, news);
	}
	async addNews(news) {
		console.log(news)
		return this.post(PATH.News, news);
	}
	async deleteNews(news) {
		return this.delete(PATH.News,news.id);
	}
}

export default NewsApiService;
