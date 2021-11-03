import express from 'express';

const productRouter = express.Router();

productRouter.get('/categories', (req, res) =>
  res.send('will respond all categories available')
);

productRouter.get('/:category', (req, res) =>
  res.send('will respond will all the products under that category')
);

productRouter.get('/:category/:id', (req, res) =>
  res.send('will respond specific product with the id')
);

export default productRouter;
