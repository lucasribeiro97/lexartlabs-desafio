"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const signup_routes_1 = __importDefault(require("./routes/signup.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/login', login_routes_1.default);
app.use('/sign-up', signup_routes_1.default);
app.use('/products', product_routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
//# sourceMappingURL=app.js.map