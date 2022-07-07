
const activitiesService = require('../services/activities-service')
const getAllActivity = async (req, res, next) => {
    try {
        const { query } = req
        const page = query.page - 1;
        const allActivities = await activitiesService.getAllActivities(page)
        res.status(200).json(allActivities)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

}

module.exports = {
    getAllActivity
}