const organizationService = require('../services/organization-service')

const getPublicData = async (req, res, next) => {
    try {
        const organization = await organizationService.getOrganization(req.params.id)
        res.json({
            organization
        })
    } catch (err) {
        res.json({err})
    }
}

module.exports={
    getPublicData
}