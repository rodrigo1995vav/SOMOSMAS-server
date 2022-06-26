const { User, sequelize } = require('../models')


const getByEmail = async (email) => {
    const user = await User.findOne({ where: { email: email } })
    if (user) {
        return user
    }
    throw "User not found"
}

const processRegister = async ({ firstName, lastName, email, password, image = null }) => {
    const rollStandard = 2;
    try {
        const userRegister = await User.create({
            firstName,
            lastName,
            email,
            password,
            image,
            roleId: rollStandard
        })
        return userRegister
    } catch (err) {
        console.log(err)
    }

}


module.exports = {
    getByEmail,
    processRegister
}