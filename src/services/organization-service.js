const { OrganizationNotFoundError } = require('../errors/organization-errors')
const organizationRepository = require('../repositories/organization-repository')

const getOrganizationById = async (id) => {
    const organization = await organizationRepository.getOrganizationById(id)
    if(!organization) {
        throw new OrganizationNotFoundError()
    }
    return organization
}

module.exports={
    getOrganizationById
}