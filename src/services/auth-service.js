
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { WrongPasswordError , CredentialsTakenError } = require('../errors/auth-errors');
const { UserNotFoundError} = require('../errors/user-errors');
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

const register = async (newUser) => {

    try{

    const user = await userService.getUserByEmail(newUser.email)

    if(user){
        throw new CredentialsTakenError(newUser.email)
    }
    }
    catch(err){

        if (err instanceof UserNotFoundError){

            const password = bcrypt.hashSync(newUser.password, 10);
            newUser.password = password
            newUser.roleId = 2
            await userService.saveUser(newUser)
            const accessToken = await generateAccessToken(newUser)
            delete newUser.password

            return  { accessToken , user:newUser }
        }
        throw err
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
    getMyProfile,
    register,
    login,
}