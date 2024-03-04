"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const Validations_1 = __importDefault(require("../middlewares/Validations"));
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.post('/', Validations_1.default.validateUserCreation, (req, res) => userController.createUser(req, res));
exports.default = router;
//# sourceMappingURL=signup.routes.js.map