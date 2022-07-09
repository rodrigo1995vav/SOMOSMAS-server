'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('members', [
      {
      name: 'Demo members 1',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    },
    {
      name: 'Demo members 2',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    },
    {
      name: 'Demo members 3',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    },
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('members', null,);
  }
};
