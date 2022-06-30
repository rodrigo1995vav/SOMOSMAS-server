const { User } = require('../models')


const getUserByEmail = async (email) =>{
    const user = await User.findOne({where:{email: email}})
    return user
}


const saveUser = async (newUser) => {

    // if newUser id is not null, it will update the user. If  id is null it will create a new register

    const user = User.build(newUser,{isNewRecord: !newUser.id})

    await user.save()

    return user
}

module.exports = {
    getUserByEmail,
    saveUser
}