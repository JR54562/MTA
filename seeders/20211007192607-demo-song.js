'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Songs', [
      {
          name:'Test Song',
	     album:'Tester Album',
		year:2021,
		length:'1:05',
        genre: 'test',
        username: 'admin',
    artist: 'The Admins'
      },
      {
        name:'Royal Orleans',
	     album:'Presence',
		year:1976,
		length:'3:24',
        genre: 'Rock',
        username: 'User 1',
        artist: 'Led Zeppelin'
      },
      {
        name:'The Crunge',
	     album:'Led Zeppelin III',
		year:1973,
		length:'3:56',
        genre: 'Rock',
        username: 'zoso',
        artist: 'Led Zeppelin'
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
