import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('productsVariations', [
      {
        product_id: 1,
        price: 1000,
        color: "black",
      },
      {
        product_id: 1,
        price: 1100,
        color: "white",
      },
      {
        product_id: 2,
        price: 1500,
        color: "black",
      },
      {
        product_id: 2,
        price: 1600,
        color: "white",
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('productsVariations', {});
  }
}