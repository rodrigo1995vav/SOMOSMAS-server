const organizationService = require('../services/organization-service')

const getPublicData = async (req, res, next) => {
    try {
        const organization = await organizationService.getOrganizationById(req.params.id)
        res.json({
            organization
        })
    } catch (err) {
        next(err)
    }
}

module.exports={
    getPublicData
}