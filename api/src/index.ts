import express from 'express';
import cartRouter from './cart/cart.controller';
import ordersRouter from './orders/orders.controller';
import productRouter from './products/product.controller';

const app = express();

app.use('/api/shop', productRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
