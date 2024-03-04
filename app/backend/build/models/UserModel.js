"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeUser_1 = require("../database/models/SequelizeUser");
class UserModel {
    constructor() {
        this.model = SequelizeUser_1.default;
    }
    async createUser(user) {
        const newUser = await this.model.create(user);
        return newUser;
    }
    async findByEmail(email) {
        const user = await this.model.findOne({ where: { email } });
        return user;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map