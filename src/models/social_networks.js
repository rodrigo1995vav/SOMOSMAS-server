'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Social_network extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Social_network.init({
        network: DataTypes.STRING,
        link: DataTypes.STRING,
        bootstrapIconName: DataTypes.STRING,
        organization_id: DataTypes.INTEGER
    }, {
        sequelize,
        tableName: 'social_networks',
    });
    return Social_network;
};