const activitiesRepository = require('../repositories/activities-repository')

const getAllActivities = async (page) => {
    const activities = await activitiesRepository.listActivities(page)
    return activities
}

const createActivity = async (activity, imagePath) => {
    const activities = await activitiesRepository.postActivity(activity,imagePath)
    return activities
}

module.exports = {
    getAllActivities,
    createActivity
}