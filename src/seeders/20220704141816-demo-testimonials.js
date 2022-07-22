'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('testimonials', [{
      name: 'Testimonial 1',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 2',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 2',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 3',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 3',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 4',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 4',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 5',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 5',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 6',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonialnumber 6',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 7',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 7',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 8',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 8',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 9',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 9',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 10',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 10',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 11',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 11',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 12',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 12',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 13',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 13',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 14',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 14',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 15',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 15',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 16',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonialnumber 16',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 17',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 17',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 18',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 18',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 19',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 19',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 20',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 20',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 21',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 21',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 22',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 22',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 23',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 23',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 24',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonialnumber 24',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 25',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 25',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 26',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 26',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 27',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 27',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 28',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 28',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 29',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 29',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Testimonial 30',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      content: 'This is the demo Testimonial number 30',
      createdAt: new Date,
      updatedAt: new Date
    },
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
