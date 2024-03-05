import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: 'postgres',
  password: 'root',
  database: 'lexartlabs_db',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
};

export = config;