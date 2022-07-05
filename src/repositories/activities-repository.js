const { Activity } = require('../models')

const listActivities = async (page) => {
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await Activity.findAndCountAll({
        attributes: ['id', 'name'],
        offset: offset,
        limit: limit,
    })
    //devuelvo un objeto con la cantidad de usuarios total que hay y un array con sos usuarios eliminado la password 
    return { total_activities: count, activities: rows }
}

const updateActivities = async(id,data) => {
    const {name, image, content} = data
    const exist=await Activity.findOne({where:{id: id}})
    if (exist) {
        const update=await Activity.update({name: name, image: image, content: content},{where:{id: id}})
        console.log('update', update)
        return {
            status:true,
            message:'updated Successfully',
            payload:update
        }
    } else {
        return {
            status:false,
            message:'activity not found'
        }
    }

}

module.exports = {
    listActivities,
    updateActivities
}