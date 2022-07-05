const activitiesRepository = require('../repositories/activities-repository')

const getAllActivities = async (page) => {
    const activities = await activitiesRepository.listActivities(page)
    return activities
}

const updateActivities = async (id,data) => {
   return await activitiesRepository.updateActivities(id,data)
}

module.exports = {
    getAllActivities,
    updateActivities
}