'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return
        await queryInterface.bulkInsert('social_networks', [
            {
                network: 'Facebook',
                link: 'https://www.facebook.com/profile.php?id=100077792335889',
                organization_id: 1
            },
            {
                network: 'Linkedin',
                link: 'https://www.instagram.com/somos.mas.ong/',
                organization_id: 1
            },
            {
                network: 'Instagram',
                link: 'https://www.linkedin.com/in/somos-mas-ong-80595b236',
                organization_id: 1
            },
            {
                network: 'Email',
                link: 'ong.somos.mas.22@gmail.com',
                organization_id: 1
            }
        ]);

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('social_networks', null,);

    }
};
