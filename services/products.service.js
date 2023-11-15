import fetch from 'node-fetch';

class ProductsService {
  baseUrl;

  constructor() {
    this.baseUrl = 'https://dummyjson.com/products/'
  }

  async getProducts(params) {
    const productsUrl = `${this.baseUrl}?limit=10`;

    const res = await fetch(this.addUrlParameters(productsUrl, params));
    return {
      code: 200,
      data: {
        message: 'Data found',
        data: await res.json()
      }
    };
  };

  addUrlParameters(url, params) {
    const skip = 10;

    if (params.q) {
      url = `${url}&q=${params.q}`;
    }

    if (params.page) {
      url = `${url}&skip=${skip * (params.page - 1)}`;
    }

    if (params.fields) {
      url = `${url}&select=${params.fields}`;
    }

    return url
  }

  async getProductById(productId) {
    if (productId) {
      const productIdUrl = `${this.baseUrl}/${productId}`;

      const res = await fetch(productIdUrl);

      if (res.status == 200) {
        return {
          code: 200,
          data: {
            message: 'Product found',
            data: await res.json()
          }
        };
      }
    }

    return {
      code: 404,
      data: {
        message: 'Product not found',
        data: null
      }
    };
  };
}

export default ProductsService;