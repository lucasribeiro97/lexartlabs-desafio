"use strict";
require("dotenv/config");
const config = {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || '123456',
    database: process.env.POSTGRES_DATABASE || 'verceldb',
    host: process.env.POSTGRES_HOST || 'localhost',
    ssl: process.env.POSTGRES_SSL === 'true',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
        }
    }
};
module.exports = config;
//# sourceMappingURL=database.js.map