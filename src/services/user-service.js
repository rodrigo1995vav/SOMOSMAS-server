
const { UserNotFoundError, UsersTableEmptyError } = require('../errors/user-errors')
const userRepository = require('../repositories/user-repository')



const getUserByEmail = async (email) => {

    const user = await userRepository.getUserByEmail(email)

    if (!user) {
        throw new UserNotFoundError({email})
    }

    return user
}

const saveUser = async (user) => {
 return await  userRepository.saveUser(user)
}


const getAllUsers = async (page) => {
    
    const usersForPage = await userRepository.getAllUsers(page)

    if(!usersForPage){
        throw new UsersTableEmptyError()
    }

    return usersForPage
}

const deleteUser = async (id) => {
    const user = await userRepository.getUserById(id)
    if (!user) {
        throw new Error(`El usuario con id: ${id} no existe`)
    }
    await userRepository.deleteUser(id)
    return "Usuario eliminado"
}

module.exports = {
    getUserByEmail,
    saveUser,
    getAllUsers,
}