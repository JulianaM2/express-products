/** Express router providing products
 * @module routes/products
 * @requires express
 */

import { Router } from 'express';
import ProductsService from '../services/products.service.js';

const router = Router();
const productsService = new ProductsService();

/**
 * Get products.
 * @name get/products
 * @function
 * @memberof module:routes/products
 * @inner
 * @param {string} q Optional. Query parameter to filter the products by name.
 * @param {number} page Default 1. Query parameter to specify page to retrieve. Every page has a limit of 10 products.
 * @param {number} fields Optional. Query parameter to specify fields that should be retrieve. String list of comma-separated values.ex: id,price. By default retrieves all fields.
 * @example
 * GET http://localhost:3000/products?q=phone&page=1&fields=id,title,price
 */
router.get('/', async function (req, res) {
  try {
    const response = await productsService.getProducts(req.query);
    res.status(response.code).send(response.data);
  } catch (error) {
    console.error('Error in: GET /products ', error);
    res.status(500).send('An error has occurred, try later.');
  }
});

/**
 * Get product by id.
 * @name get/products/:productId
 * @function
 * @memberof module:routes/products
 * @inner
 * @param {string} productId Id of the product to be retrieved
 * @example
 * GET http://localhost:3000/products/1
 */
router.get('/:productId', async function (req, res) {
  try {
    const response = await productsService.getProductById(req.params.productId);
    res.status(response.code).send(response.data);
  } catch (error) {
    console.error('Error in: GET /:productId ', error);
    res.status(500).send('An error has occurred, try later.');
  }
});

export default router;
