const productRouter = require("express").Router();

productRouter.get("/categories", (req, res) => {
  return res.send("will respond all categories available");
});

productRouter.get("/:category", (req, res) => {
  return res.send("will respond will all the products under that category");
});

productRouter.get("/:category/:id", (req, res) => {
  return res.send("will respond specific product with the id");
});

module.exports = productRouter;
