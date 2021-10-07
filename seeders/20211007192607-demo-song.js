'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Songs', [
      {
          name:'admin',
	     album:'Tester',
		year:2021,
		length:'5:05',
		genre:'test'        
      },
      {
        name:'Royal Orleans',
	     album:'Presence',
		year:1976,
		length:'3:24',
		genre:'Rock'  
      },
      {
        name:'The Crunge',
	     album:'Led Zeppelin III',
		year:1973,
		length:'3:56',
		genre:'Rock'  
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
