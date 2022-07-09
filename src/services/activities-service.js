const activitiesRepository = require('../repositories/activities-repository')

const getAllActivities = async (page) => {
    const activities = await activitiesRepository.listActivities(page)
    
    if(!activities) {
        throw new ActivitiesTableEmptyError()
    }

    return activities
}

module.exports = {
    getAllActivities
}