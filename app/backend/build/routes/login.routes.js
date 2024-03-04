"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Validations_1 = require("../middlewares/Validations");
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.post('/', Validations_1.default.validateLogin, (req, res) => userController.login(req, res));
router.get('/role', Validations_1.default.authenticate, (req, res) => userController.getRole(req, res));
exports.default = router;
//# sourceMappingURL=login.routes.js.map