'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
=======
    await queryInterface.bulkInsert('users', [{
      firstName: 'Usuario',
      lastName: 'Demo',
>>>>>>> main
      email: 'test@test.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
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
