"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ordersRouter = express_1.default.Router();
ordersRouter.get('/', function (req, res) {
    return res.send('will respond all orders by the user');
});
ordersRouter.post('/', function (req, res) {
    return res.send('will store the order in the db');
});
ordersRouter.get('/:id', function (req, res) {
    return res.send("will respond specific order with the id " + req.params.id);
});
exports.default = ordersRouter;
//# sourceMappingURL=orders.controller.js.map