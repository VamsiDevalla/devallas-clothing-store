import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cartRouter from './cart/cart.controller';
import ordersRouter from './orders/orders.controller';
import productRouter from './products/product.controller';

dotenv.config();
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:8080',
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/shop', productRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
