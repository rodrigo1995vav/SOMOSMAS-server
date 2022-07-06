const userService = require('../services/user-service')

const getUsers = async (req, res, next) => {
    try {
        const { query } = req
        console.log(query, 'query')
        const page = query.page - 1;
        const users = await userService.getAllUsers(page)
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { params } = req
        const { id } = params
        const user = await userService.deleteUser(id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getUsers,
    deleteUser
}