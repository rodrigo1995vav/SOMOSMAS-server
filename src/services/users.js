const { User, sequelize } = require('../models')

const getAllUsers = async (page) => {
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await User.findAndCountAll({
        attributes: {
            exclude: ['password']
        },
        offset: offset,
        limit: limit,
    })
    //devuelvo un objeto con la cantidad de usuarios total que hay y un array con sos usuarios eliminado la password 
    return { total_users: count, users: rows }
}



module.exports = {
    getAllUsers
}