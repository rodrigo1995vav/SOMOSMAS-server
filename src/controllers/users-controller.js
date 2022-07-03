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
module.exports = {
    getUsers
}