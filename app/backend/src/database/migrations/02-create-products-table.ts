import { DataTypes, Model, QueryInterface } from "sequelize";
import { IProducts } from "../../interfaces/products/IProduct";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProducts>>("products", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });
},
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("products");
  }
}
