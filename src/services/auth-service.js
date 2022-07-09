
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { WrongPasswordError } = require('../errors/auth-errors');
const userService = require('../services/user-service')



const login = async (body) => {
    const user = await userService.getUserByEmail(body.email)
    if (bcrypt.compareSync(body.password, user.password)) {
        const accessToken = await generateAccessToken(user)
        delete await user.password
        return { accessToken , user }
    } else {
        throw new WrongPasswordError()
    }

}

const getMyProfile = async (id) => {
    const user = await authRepository.getById(id)
    return user
}

const generateAccessToken = async (user)=>{

    const userData = {...user}
    delete userData.password
    const accessToken = jwt.sign(userData, process.env.SECRET_JWT_SEED, { expiresIn: Number(process.env.TOKEN_EXPIRATION_TIME) }) 
    return accessToken  

}






module.exports = {
  
    login,
}