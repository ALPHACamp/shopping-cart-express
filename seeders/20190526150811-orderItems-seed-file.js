'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('OrderItems', 
      Array.from({length: 20}).map((item, index) =>
      ({
        OrderId: Math.floor(Math.random() * 3)+1,
        ProductId: Math.floor(Math.random() * 50)+1,
        price: Math.floor(Math.random() * 500)+1,
        quantity: Math.floor(Math.random() * 10)+1,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
