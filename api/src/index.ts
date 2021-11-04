import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import cartRouter from './cart/cart.controller';
import ordersRouter from './orders/orders.controller';
import productRouter from './products/product.controller';
import DB from './db/database.helper';

dotenv.config();

const corsOptions: cors.CorsOptions | cors.CorsOptionsDelegate = {
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:8080',
};

const PORT = process.env.SERVE_ON_PORT || 8081;

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/shop', productRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);

async function run(): Promise<void> {
  try {
    await DB.init();
  } catch (error) {
    throw error;
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

try {
  run();
} catch (error) {
  throw error;
}

export default app;
