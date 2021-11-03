"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var cart_controller_1 = __importDefault(require("./cart/cart.controller"));
var orders_controller_1 = __importDefault(require("./orders/orders.controller"));
var product_controller_1 = __importDefault(require("./products/product.controller"));
dotenv_1.default.config();
var corsOptions = {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:8080',
};
var app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/shop', product_controller_1.default);
app.use('/api/orders', orders_controller_1.default);
app.use('/api/cart', cart_controller_1.default);
var PORT = 8081;
app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
exports.default = app;
//# sourceMappingURL=index.js.map