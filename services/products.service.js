import fetch from 'node-fetch';
import { addUrlParameters } from '../helpers/products.helper';
import { buildResponse } from '../helpers/common.helper';

class ProductsService {
  baseUrl;

  constructor() {
    this.baseUrl = 'https://dummyjson.com/products/'
  }

  async getProducts(params) {
    const productsUrl = `${this.baseUrl}?limit=10`;

    const res = await fetch(addUrlParameters(productsUrl, params));
    
    return buildResponse(200, await res.json(), 'Products found');
  };

  async getProductById(productId) {
    if (productId) {
      const productIdUrl = `${this.baseUrl}/${productId}`;

      const res = await fetch(productIdUrl);

      if (res.status == 200) {
        return buildResponse(200, await res.json(), 'Product found');
      }
    }

    return buildResponse(404, data, 'Product not found');
  };
}

export default ProductsService;