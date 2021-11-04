import express from 'express';

const ordersRouter = express.Router();

ordersRouter.get('/', (request, response) => response.send('will respond all orders by the user'));

ordersRouter.post('/', (request, response) => response.send('will store the order in the db'));

ordersRouter.get('/:id', (request, response) =>
  response.send(`will respond specific order with the id, here is the id: ${request.params.id}`),
);

export default ordersRouter;
