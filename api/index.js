const express = require("express");

const productRouter = require("./products/product.controller");
const ordersRouter = require("./orders/orders.controller");
const cartRouter = require("./cart/cart.controller");
const app = express();
app.use("/api/shop", productRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/cart", cartRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
