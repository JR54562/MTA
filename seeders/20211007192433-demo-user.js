'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username:'admin',
        password: 'admin'        
      },
      {
        username:'User 1',
        password: 'green'        
      },
      {
        username:'User 2',
        password: 'yellow'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
