import express from 'express';

const cartRouter = express.Router();

cartRouter.get('/', (req, res) => res.send('will respond with all the items in the cart'));

cartRouter.post('/add', (req, res) => {
  res.send('will add the product to the cart');
});

cartRouter.get('/remove/:productId', (req, res) =>
  res.send(`will remove given item from the cart ${req.params.productId}`),
);

export default cartRouter;
