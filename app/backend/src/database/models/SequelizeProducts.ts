import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";
import db from '.';

class SequelizeProducts extends Model <InferAttributes<SequelizeProducts>,
InferCreationAttributes<SequelizeProducts>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare brand: string;

  declare model: string;

  declare price: number;

  declare color: string;
}

SequelizeProducts.init({
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
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
  underscored: true,
});

export default SequelizeProducts;