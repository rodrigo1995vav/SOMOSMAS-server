'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('social_networks', [
            {
                network: 'Facebook',
                link: 'https://www.facebook.com/profile.php?id=100077792335889',
            },
            {
                network: 'Linkedin',
                link: 'https://www.instagram.com/somos.mas.ong/',
            },
            {
                network: 'Instagram',
                link: 'https://www.linkedin.com/in/somos-mas-ong-80595b236',
            },
            {
                network: 'Email',
                link: 'ong.somos.mas.22@gmail.com',
            }
        ]);

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('social_networks', null, {});

    }
};
