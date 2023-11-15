import { Router } from 'express';
import ProductsService from '../services/products.service.js';

const router = Router();
const productsService = new ProductsService();

router.get('/', async function (req, res, next) {
  try {
    res.status(200).send(await productsService.getProducts(req.query))
  } catch (error) {
    console.error('Error in: GET /products ', error)
    res.status(500).send('An error has occurred, try later.');
  }
});

export default router;
