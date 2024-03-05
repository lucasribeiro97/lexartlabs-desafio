import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: "Xiaomi Redmi 9",
        brand: "Xiaomi",
        model: "Redmi 9",
      },
      {
        name: "Iphone 14 Pro",
        brand: "Apple",
        model: "14 Pro",
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}