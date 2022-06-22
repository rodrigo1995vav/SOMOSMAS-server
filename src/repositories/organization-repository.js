const { Organization, sequelize } = require('../models')

const getOrganizationById = async (id) =>{
    const organization = await Organization.findOne({where:{id: id}})
    return organization
}

module.exports = {
    getOrganizationById
}