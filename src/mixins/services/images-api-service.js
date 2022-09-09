import HttpApiService from './http-api-services';
import {APP_SETTINGS} from '../../../config';
const PATH = APP_SETTINGS.API_PATH.IMAGES;
class ImagesApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getAllImages() {
		return this.get(PATH.Images);
	}
	async updateImages(image) {
		return this.update(PATH.Images+`/${image.id}`, image,{'content-type': 'multipart/form-data',"Access-Control-Allow-Origin": "*"});
	}
	async updateImages_with_id(image,id) {
		return this.post(PATH.Images+`/${id}`, image,{'content-type': 'multipart/form-data',"Access-Control-Allow-Origin": "*"});
	}
	async addImages(image) {
		return this.post(PATH.Images, image,{'content-type': 'multipart/form-data',"Access-Control-Allow-Origin": "*"});
	}
	async deleteImages(image) {
		return this.delete(PATH.Images,image.id);
	}
}

export default ImagesApiService;
