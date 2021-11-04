import express from 'express';

const cartRouter = express.Router();

cartRouter.get('/', (request, response) => response.send('will respond with all the items in the cart'));

cartRouter.post('/add', (request, response) => {
  response.send('will add the product to the cart');
});

cartRouter.get('/remove/:productId', (request, response) =>
  response.send(`will remove given item from the cart ${request.params.productId}`),
);

export default cartRouter;
