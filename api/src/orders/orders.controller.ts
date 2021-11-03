import express from 'express';

const ordersRouter = express.Router();

ordersRouter.get('/', (req, res) => res.send('will respond all orders by the user'));

ordersRouter.post('/', (req, res) => res.send('will store the order in the db'));

ordersRouter.get('/:id', (req, res) =>
  res.send(`will respond specific order with the id, here is the id: ${req.params.id}`)
);

export default ordersRouter;
