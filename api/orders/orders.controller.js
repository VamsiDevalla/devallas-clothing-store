const ordersRouter = require("express").Router();

ordersRouter.get("/", (req, res) => {
  return res.send("will respond all orders by the user");
});

ordersRouter.post("/", (req, res) => {
  return res.send("will store the order in the db");
});

ordersRouter.get("/:id", (req, res) => {
  return res.send("will respond specific order with the id " + req.params.id);
});

module.exports = ordersRouter;
