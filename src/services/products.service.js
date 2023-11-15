import fetch from 'node-fetch';
import { addUrlParameters } from '../helpers/products.helper.js';
import { buildResponse } from '../helpers/common.helper.js';


class ProductsService {
  baseUrl;

  constructor() {
    this.baseUrl = 'https://dummyjson.com/products/'
  }

  /**
   * Get all products with a limit of 10 products by page by default.
   *
   * @param {Object} params
   * @return {Object}
   */
  async getProducts(params) {
    const productsUrl = `${this.baseUrl}?limit=10`;

    const res = await fetch(addUrlParameters(productsUrl, params));

    return buildResponse(200, await res.json(), 'Products found');
  };

  /**
   * Get product by id.
   *
   * @param {number} productId
   * @return {Object}
   */
  async getProductById(productId) {
    if (productId) {
      const productIdUrl = `${this.baseUrl}/${productId}`;

      const res = await fetch(productIdUrl);

      if (res.status == 200) {
        return buildResponse(200, await res.json(), 'Product found');
      }
    }

    return buildResponse(404, {}, 'Product not found');
  };
}

export default ProductsService;