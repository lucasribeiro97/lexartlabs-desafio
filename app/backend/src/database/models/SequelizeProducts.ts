import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";
import db from '.';

class SequelizeProduct extends Model <InferAttributes<SequelizeProduct>,
InferCreationAttributes<SequelizeProduct>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare brand: string;

  declare model: string;
}

SequelizeProduct.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
  underscored: true,
});

export default SequelizeProduct;