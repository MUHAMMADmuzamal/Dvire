import axios from 'axios';
import {APP_SETTINGS} from '../../../config'
class HttpApiService {
	constructor(token) {
		this._baseURL = APP_SETTINGS.API_PATH;
		this._token = token;
		this.createAxiosInstance();
	}

	isEmpty = (value) =>
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0);

	defaultOptions = () => {
		let headers = {};
		if (this.isEmpty(this._token)) {
			headers = {
				Accept: 'application/json',
			};
		} else {
			headers = {
				Accept: 'application/json',
				Authorization: `Bearer ${this._token}`,
			};
		}

		return {
			baseURL: this._baseURL,
			// withCredentials: true,
			headers,
		};
	};

	/**
	 * Create instance
	 */
	createAxiosInstance() {
		this._axiosInstance = axios.create(this.defaultOptions());

		// Add a request interceptor
		this._axiosInstance.interceptors.request.use(
			(config) => config,
			(error) => {
				return Promise.reject(error);
			},
		);

		// Add a response interceptor
		this._axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError);
	}

	get(endpoint, conf = {}) {
		return new Promise((resolve, reject) => {
			this._axiosInstance
				.get(`${endpoint}`, conf)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	create(endpoint, data, conf = {}) {
		return this.post(endpoint, data, conf);
	}

	post(endpoint, data, conf = {}) {
		return new Promise((resolve, reject) => {
			this._axiosInstance
				.post(`${endpoint}`, data, conf)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	update(endpoint, data, conf = {}) {
		return new Promise((resolve, reject) => {
			this._axiosInstance
				.put(`${endpoint}`, data, conf)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	delete(endpoint, id, conf = {}) {
		return new Promise((resolve, reject) => {
			this._axiosInstance
				.delete(`${endpoint}/${id}`, conf)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	deleteFile(endpoint, conf = {}) {
		return new Promise((resolve, reject) => {
			this._axiosInstance
				.delete(`${endpoint}`, conf)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	uploadFile(endpoint, data, conf = {}) {
		return this.post(endpoint, data, conf);
	}

	downloadFile(endpoint) {
		const conf = {
			responseType: 'blob', // important
			timeout: 30000,
		};
		return this.get(endpoint, conf);
	}

	handleSuccess(response) {
		// console.log('handleSuccess' + JSON.stringify(response));
		return response;
	}

	handleError(err) {
		let errorStatement = '';
		if(err.response.status === 401) {
			window.location.assign('/login');
		}
		if(err.response.status === 422) {
			console.log(err.response);
			let error;
			if(err.response.data.message) {
				error = err.response.data.message;
			} else {
				error = err.response.data;
			}
			console.log(error);
		}
		if(err.response.status === 500) {
			console.log(err.response);
		}
		if (!err.response) {
			console.log(`Network error: ${err}`);
			errorStatement = err.message;
		} else {
			const { status } = err.response;
			console.log(`HttpService::Error(${status}) : ${err.response.data.message}`);
			errorStatement = err.response.data.message;
		}
		return Promise.reject(errorStatement);
	}

	redirectTo(document, path) {
		document.location = path;
	}
}

export default HttpApiService;
