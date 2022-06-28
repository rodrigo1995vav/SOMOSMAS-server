const bcrypt = require('bcrypt');
const authRepository = require('../repositories/auth-repository')

const login = async (body) => {
    const user = await authRepository.getByEmail(body.email)
    if (bcrypt.compareSync(body.password, user.password)) {
        return user
    } else {
        throw "Incorrect password"
    }

}

const getMyProfile = async (id) => {
    const user = await authRepository.getById(id)
    return user
}

module.exports = {
    login,
    getMyProfile
}