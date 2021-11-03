"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cartRouter = express_1.default.Router();
cartRouter.get('/', function (req, res) {
    return res.send('will respond with all the items in the cart');
});
cartRouter.post('/add', function (req, res) {
    return res.send('will add the product to the cart');
});
cartRouter.get('/remove/:productId', function (req, res) {
    return res.send("will remove given item from the cart " + req.params.productId);
});
exports.default = cartRouter;
//# sourceMappingURL=cart.controller.js.map