



const getUserByEmail = async (email) => {

    const user = await userRepository.getUserByEmail(email)
    
    if(!user){
        throw new Error (`El usuario con email: ${email} no existe`)
    }

    return user
}


module.exports = {
    getUserByEmail,
}