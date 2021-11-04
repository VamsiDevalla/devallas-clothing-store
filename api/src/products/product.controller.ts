import express from 'express';

const productRouter = express.Router();

productRouter.get('/categories', (request, response) => response.send('will respond all categories available'));

productRouter.get('/:category', (request, response) =>
  response.send('will respond will all the products under that category'),
);

productRouter.get('/:category/:id', (request, response) => response.send('will respond specific product with the id'));

export default productRouter;
