"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.post('/', (req, res) => userController.createUser(req, res));
router.get('/test', (req, res) => res.status(200).send('ok'));
exports.default = router;
//# sourceMappingURL=users.routes.js.map