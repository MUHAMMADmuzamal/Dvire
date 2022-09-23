import HttpApiService from '../services/http-api-services';
import {APP_SETTINGS} from '../../../config';
const PATH = APP_SETTINGS.API_PATH.LANGUAGES;
class LanguagesApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	async getAllWordsForTranslation() {
		return this.get(PATH.allWords);
	}
	async getAllWords() {
		return this.get(PATH.Languages);
	}
	async getWord(id) {
		return this.get(PATH.Languages+`/${id}`);
	}
	async updateWord(word) {
		return this.update(PATH.Languages+`/${word.id}`, word);
	}
	async addWord(word) {
		return this.post(PATH.Languages, word);
	}
	async deleteWord(word) {
		return this.delete(PATH.Languages,word.id);
	}
}

export default LanguagesApiService;
