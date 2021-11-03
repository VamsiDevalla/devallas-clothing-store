"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productRouter = express_1.default.Router();
productRouter.get('/categories', function (req, res) { return res.send('will respond all categories available'); });
productRouter.get('/:category', function (req, res) { return res.send('will respond will all the products under that category'); });
productRouter.get('/:category/:id', function (req, res) { return res.send('will respond specific product with the id'); });
exports.default = productRouter;
//# sourceMappingURL=product.controller.js.map