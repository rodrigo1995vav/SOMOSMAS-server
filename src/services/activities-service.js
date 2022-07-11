const { ActivitiesTableEmptyError } = require('../errors/activity-errors')
const activitiesRepository = require('../repositories/activities-repository')

const getAllActivities = async (page) => {
    const activities = await activitiesRepository.listActivities(page)
    
    if(!activities) {
        throw new ActivitiesTableEmptyError()
    }

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