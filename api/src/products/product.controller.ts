import express from 'express';
import productService from './product.service';

const productRouter = express.Router();

productRouter.get('/categories', async(request, response) => {
const products = await productService.getAll()
console.log('products', products)
response.send(products);
});

productRouter.get('/:category', (request, response) =>
  response.send('will respond will all the products under that category'),
);

productRouter.get('/:category/:id', (request, response) => response.send('will respond specific product with the id'));

export default productRouter;
