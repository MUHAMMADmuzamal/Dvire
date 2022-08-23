import HttpApiService from '../services/http-api-services';
import {APP_SETTINGS} from '../../../config';
const PATH = APP_SETTINGS.API_PATH.POSTS;
class PostsApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getAllPosts() {
		return this.get(PATH.Posts);
	}
	async updatePost(post) {
		return this.update(PATH.Posts+`/${post.id}`, post);
	}
	async addPost(post) {
		return this.post(PATH.Posts, post);
	}
	async deletePost(post) {
		return this.delete(PATH.Posts,post.id);
	}
    // post types
	async getAllTypes() {
		return this.get(PATH.Types);
	}
	async updateType(type) {
		return this.update(PATH.Types+`/${type.id}`, type);
	}
	async addType(type) {
		return this.post(PATH.Types, type);
	}
	async deleteType(type) {
		return this.delete(PATH.Types,type.id);
	}
}

export default PostsApiService;
