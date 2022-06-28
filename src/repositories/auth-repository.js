const { User } = require('../models')



const getByEmail = async (email) =>{
    const user = await User.findOne({where:{email: email}})
    if (user){
        return user
    }
        throw "User not found"
}

const getById = async (id) => {
    const user = await User.findOne({where:{id: id}})
    if (user){
        return user
    }
        throw new err("User not found")
}

  

module.exports = {
    getByEmail, 
    getById
}