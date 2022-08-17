import HttpApiService from '../services/http-api-services';

class SellerApiService extends HttpApiService {
	constructor(token) {
		super(token);
	}

	// async getReturnedOrders() {
	// 	return this.get('orders/returned');
	// }

	// async getRTOOrders() {
	// 	return this.get('orders/failed-delivery');
	// }

	async getAllProducts() {
		return this.get('users');
	}

	// async getFilteredProducts(filter) {
	// 	return this.get(`inventory/filtered?filter=${filter}`);
	// }

	// async getProductStats() {
	// 	return this.get('inventory/stats');
	// }

	// async getAllProductsWithRatings() {
	// 	return this.get('reviews/products');
	// }

	// async getProductWithRatings(id) {
	// 	return this.get(`reviews/product/${id}`);
	// }

	// async getProduct(id) {
	// 	return this.get(`inventory/view/${id}`);
	// }

	// async getProductImages(id) {
	// 	return this.get(`inventory/preview/${id}`);
	// }

	// async deleteProductImages(productId, imageId) {
	// 	return this.delete(`inventory/${productId}/preview`, imageId);
	// }

	// async updateProduct(product) {
	// 	return this.update(`products/${product.id}/`, product);
	// }

	// async getOnHoldOrders() {
	// 	return this.get(`orders/on-hold`);
	// }

	// async getShippedOrders() {
	// 	return this.get(`orders/shipped`);
	// }

	// async shipOrder(id) {
	// 	return this.post(`orders/ship/${id}`);
	// }

	// async getDeliveredOrders() {
	// 	return this.get(`orders/delivered`);
	// }

	// async getOrder(orderId) {
	// 	return this.get(`orders/get/${orderId}`);
	// }

	// async getLatestNotice() {
	// 	return this.get(`notices/latest`);
	// }

	// async getAllCategories() {
	// 	return this.get(`categories/all`);
	// }

	// async getCategory(id) {
	// 	return this.get(`categories/get/${id}`);
	// }

	// async getAllCategoriesCount() {
	// 	return this.get(`categories/count`);
	// }

	// async verifyGst(gst) {
	// 	return this.post(`verify/gst`, gst);
	// }

	// async verifyBankAccount(data) {
	// 	return this.post(`verify/bank-account`, data);
	// }

	// async getUserProfile() {
	// 	return this.get(`auth/profile`);
	// }


}

export default SellerApiService;
