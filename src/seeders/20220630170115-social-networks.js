'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return
        await queryInterface.bulkInsert('social_networks', [
            {
                network: 'Facebook',
                link: 'https://www.facebook.com/profile.php?id=100077792335889',
                bootstrapIconName: 'bi-facebook',
                organization_id: 1
            },
            {
                network: 'Linkedin',
                link: 'https://www.instagram.com/somos.mas.ong/',
                bootstrapIconName: 'bi-instagram',
                organization_id: 1
            },
            {
                network: 'Instagram',
                link: 'https://www.linkedin.com/in/somos-mas-ong-80595b236',
                bootstrapIconName: 'bi-linkedin',
                organization_id: 1
            },
            {
                network: 'Email',
                link: 'ong.somos.mas.22@gmail.com',
                bootstrapIconName: 'bi-envelope',
                organization_id: 1
            }
        ]);

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('social_networks', null,);

    }
};
