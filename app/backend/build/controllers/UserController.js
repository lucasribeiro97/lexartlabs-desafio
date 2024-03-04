"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const UserService_1 = require("../services/UserService");
class UserController {
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
    }
    async createUser(req, res) {
        const { email, password, username } = req.body;
        const { status, data } = await this.userService.createUser(email, password, username);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const { status, data } = await this.userService.login(email, password);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getRole(req, res) {
        const { email } = res.locals.auth;
        const { status, data } = await this.userService.getRole(email);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map