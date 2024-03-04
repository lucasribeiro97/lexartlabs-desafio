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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const Joi = __importStar(require("joi"));
class Validations {
    static authenticate(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const [type, token] = req.headers.authorization.split(' ');
        if (type !== 'Bearer') {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
        try {
            const secret = 'jwt_secret';
            const payload = jwt.verify(token, secret);
            res.locals.auth = payload;
        }
        catch (error) {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
        next();
    }
    static validateLogin(req, res, next) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields must be filled' });
        }
        if (!regexEmail.test(email) || password.length < 6) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        next();
    }
    static validateUserCreation(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            username: Joi.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.message });
        }
        return next();
    }
}
exports.default = Validations;
//# sourceMappingURL=Validations.js.map