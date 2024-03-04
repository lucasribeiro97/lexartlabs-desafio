import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: "Xiaomi Redmi 9",
        brand: "Xiaomi",
        model: "Redmi 9",
        price: 1000,
        color: "red"
      },
      {
        name: "Iphone 14 Pro",
        brand: "Apple",
        model: "14 Pro",
        price: 2000,
        color: "silver"
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}