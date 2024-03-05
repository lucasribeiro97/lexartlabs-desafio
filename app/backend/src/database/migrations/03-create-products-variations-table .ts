import { DataTypes, Model, QueryInterface } from "sequelize";
import { IProductVariation } from "../../interfaces/productVariation/IProductVariation";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProductVariation>>("productsVariations", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id'
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      },
  });
},
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("productsVariations");
  }
}
