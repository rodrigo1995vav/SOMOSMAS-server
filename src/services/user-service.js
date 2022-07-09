
const { CredentialsTakenError, UserNotFoundError, UsersTableEmptyError } = require('../errors/user-errors')
const userRepository = require('../repositories/user-repository')



const getUserByEmail = async (email) => {

    const user = await userRepository.getUserByEmail(email)

    if (!user) {
        throw new UserNotFoundError({email})
    }

    return user
}

const userRegister = async (newUser) => {

    const user = await userRepository.getUserByEmail(newUser.email)

    if (user) {
        throw new CredentialsTakenError(newUser.email)
    }
    const password = bcrypt.hashSync(newUser.password, 10);
    newUser.password = password
    newUser.roleId = 2
    const savedUser = await userRepository.saveUser(newUser)
    delete savedUser.password
    return savedUser
}


const getAllUsers = async (page) => {
    
    const usersForPage = await userRepository.getAllUsers(page)

    if(!usersForPage){
        throw new UsersTableEmptyError()
    }

    return usersForPage
}

module.exports = {
    getUserByEmail,
    userRegister,
    getAllUsers,
}