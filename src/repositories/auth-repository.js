
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
        //La entidad de secuela tiene un .get()método para devolver la versión del objeto sin formato (simple).
        //para findAll si se usa raw:true ,en este caso no 
        delete userRegister.get({ plain: true }).password // elimino datos sensibles     
        return userRegister
    } catch (err) {
        console.log(err)
    }

}


module.exports = {
    getByEmail,
    processRegister
}