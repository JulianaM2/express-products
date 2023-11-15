/** Products Service
 * @module services/products
 *
 * @requires node-fetch
 */

import fetch from 'node-fetch';
import { addUrlParameters } from '../helpers/products.helper.js';
import { buildResponse } from '../helpers/common.helper.js';

/**
@constructor 
**/
class ProductsService {
  baseUrl;

  constructor() {
    this.baseUrl = 'https://dummyjson.com/products/';
  }

  /**
   * Get all products with a limit of 10 products by page by default.
   * @function
   * @memberof module:services/products
   * @inner
   * @param {Object} params
   * @return {Object}
   */
  async getProducts(params) {
    const res = await fetch(addUrlParameters(this.baseUrl, params));
    const data = await res.json();
    delete data.skip;

    return buildResponse(200, {
      ...data,
      page: +(params.page || 1),
    }, 'Products found');
  }

  /**
   * Get product by id.
   * @function
   * @memberof module:services/products
   * @inner
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
  }
}

export default ProductsService;
