"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel_1 = require("../models/UserModel");
const SequelizeUser_1 = require("../database/models/SequelizeUser");
class UserService {
    constructor(userModel = new UserModel_1.default(), model = SequelizeUser_1.default) {
        this.userModel = userModel;
        this.model = model;
    }
    async createUser(email, password, username) {
        const userExists = await this.model.findOne({ where: { email } });
        if (userExists) {
            return { status: 'CONFLICT', data: { message: 'User already exists' } };
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await this.userModel.createUser({ email, password: hashedPassword, username, role: 'user' });
        const payload = { id: newUser.id, email: newUser.email };
        const secret = 'jwt_secret';
        const token = jwt.sign(payload, secret, { expiresIn: '10d' });
        return { status: 'CREATED', data: { token } };
    }
    async login(email, password) {
        const user = await this.userModel.findByEmail(email);
        if (!user) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        const payload = { id: user.id, email: user.email, role: user.role };
        const secret = 'jwt_secret';
        const token = jwt.sign(payload, secret, { expiresIn: '10d' });
        return { status: 'SUCCESSFUL', data: { token } };
    }
    async getRole(email) {
        const user = await this.userModel.findByEmail(email);
        if (!user) {
            return { status: 'NOT_FOUND', data: { message: 'User not found' } };
        }
        return { status: 'SUCCESSFUL', data: { role: user.role } };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map