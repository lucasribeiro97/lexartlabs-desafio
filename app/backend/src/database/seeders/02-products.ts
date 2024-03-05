import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: "Xiaomi Redmi 9",
        brand: "Xiaomi",
        model: "Redmi 9",
        price: 200,
        color: "Black"
      },
      {
        name: "Iphone 14 Pro",
        brand: "Apple",
        model: "14 Pro",
        price: 1000,
        color: "White"
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}