"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const SequelizeUser_1 = __importDefault(require("../database/models/SequelizeUser"));
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