"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_routes_1 = require("./login.routes");
const signup_routes_1 = require("./signup.routes");
const router = (0, express_1.Router)();
router.use('/sign-up', signup_routes_1.default);
router.use('/login', login_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map