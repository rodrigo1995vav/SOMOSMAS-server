'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('members', [
            {
                name: "Charles Morris",
                image: "https://reqres.in/img/faces/5-image.jpg",
                description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 1
            },
            {
                name: "George Bluth",
                image: "https://reqres.in/img/faces/1-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

            {
                name: "Janet Weaver",
                image: "https://reqres.in/img/faces/2-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Emma Wong",
                image: "https://reqres.in/img/faces/3-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

            {
                name: "Eve Holt",
                image: "https://reqres.in/img/faces/4-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Tracey Ramos",
                image: "https://reqres.in/img/faces/6-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Michael Lawson",
                image: "https://reqres.in/img/faces/7-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

            {
                name: "Lindsay Ferguson",
                image: "https://reqres.in/img/faces/8-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Tobias Funke",
                image: "https://reqres.in/img/faces/9-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 2
            },

            {
                name: "Byron Fields",
                image: "https://reqres.in/img/faces/10-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 3
            },

            {
                name: "George Edwards",
                image: "https://reqres.in/img/faces/11-image.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolor suscipit obcaecati dolorum deleniti optio aliquam repudiandae rerum quo aliquid. Maxime rem voluptates odio omnis ipsam? Ab atque eius sit!",
                roleOngId: 1
            },

        ], {});
    },


    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('members', null,);
    }
};



[

]