import fetch from 'node-fetch';

class ProductsService {
  constructor() {
  }

  async getProducts(params) {
    const baseUrl = 'https://dummyjson.com/products?limit=10';

    const res = await fetch(this.addUrlParameters(baseUrl, params));
    return {
      code: 200,
      message: 'Data found',
      data: await res.json()
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
}

export default ProductsService;