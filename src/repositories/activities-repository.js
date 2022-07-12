const { Activity } = require('../models')

const listActivities = async (page) => {
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await Activity.findAndCountAll({
        attributes: ['id', 'name'],
        offset: offset,
        limit: limit,
    })
    if (count === 0){
        return null
    }
    //devuelvo un objeto con la cantidad de usuarios total que hay y un array con sos usuarios eliminado la password 
    return { total_activities: count, activities: rows }
}

const postActivity = async (activity, imagePath) => {
    console.log(imagePath)
    activity.image = imagePath
    console.log(activity.image)
    //This will create a new row at the end of Activities table
    const currentActivity = await Activity.create(activity)   
    return (currentActivity)
}



module.exports = {
    listActivities,
    postActivity
}