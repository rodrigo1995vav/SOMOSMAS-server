const { User, sequelize } = require('../models')


const getByEmail = async (email) =>{
    const user = await User.findOne({where:{email: email}})
    if (user){
        return user
    }
        throw "User not found"
}



module.exports = {
    getByEmail
}