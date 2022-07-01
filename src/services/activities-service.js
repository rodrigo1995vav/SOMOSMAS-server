const activitiesRepository = require('../repositories/activities-repository')

const getAllActivities = async (page) => {
    const activities = await activitiesRepository.listActivities(page)
    return activities
}

module.exports = {
    getAllActivities
}