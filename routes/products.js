import { Router } from 'express';
import ProductsService from '../services/products.service.js';

const router = Router();
const productsService = new ProductsService();

router.get('/', async function (req, res, next) {
  try {
    const response = await productsService.getProducts(req.query);
    res.status(response.code).send(response.data);
  } catch (error) {
    console.error('Error in: GET /products ', error);
    res.status(500).send('An error has occurred, try later.');
  }
});

router.get('/:productId', async function (req, res, next) {
  try {
    const response = await productsService.getProductById(req.params.productId);
    res.status(response.code).send(response.data);
  } catch (error) {
    console.error('Error in: GET /:productId ', error)
    res.status(500).send('An error has occurred, try later.');
  }
});

export default router;
