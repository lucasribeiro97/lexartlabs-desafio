import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";
import db from '.';
import SequelizeProduct from "./SequelizeProducts";

class SequelizeProductVariation extends Model <InferAttributes<SequelizeProductVariation>,
InferCreationAttributes<SequelizeProductVariation>> {
  declare id: CreationOptional<number>;

  declare productId: number;

  declare price: number;

  declare color: string;
}

SequelizeProductVariation.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'productsVariations',
  timestamps: false,
  underscored: true,
});

SequelizeProductVariation.belongsTo(SequelizeProduct, { foreignKey: 'productId'})

export default SequelizeProductVariation;