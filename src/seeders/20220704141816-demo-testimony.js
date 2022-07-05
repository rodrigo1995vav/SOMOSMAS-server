'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testimonies', [{
      name: 'Demo test 1',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 2',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 2',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 3',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 3',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 4',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 4',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 5',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 5',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 6',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 6',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 7',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 7',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 8',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 8',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Demo activity 9',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo activity number 9',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
