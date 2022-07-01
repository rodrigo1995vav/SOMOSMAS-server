const { Activity } = require('../models')

const listActivities = async (page) => {
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await Activity.findAndCountAll({
        offset: offset,
        limit: limit,
    })
    //devuelvo un objeto con la cantidad de usuarios total que hay y un array con sos usuarios eliminado la password 
    return { total_activities: count, activities: rows }
}



module.exports = {
    listActivities
}