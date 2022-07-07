const { Organization, Social_network,sequelize } = require('../models')

const getOrganizationById = async (id) =>{
    const organization = await Organization.findOne({
        where:{id: id},
        include: Social_network
    })
    return organization
}

module.exports = {
    getOrganizationById
}