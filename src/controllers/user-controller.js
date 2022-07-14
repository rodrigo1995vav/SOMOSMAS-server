const userService = require('../services/user-service')

const getUsers = async (req, res, next) => {
    try {
        const { query } = req
        console.log(query, 'query')
        const page = query.page - 1;
        query.page = query.page - 1
        const users = await userService.getAllUsers(query)
        res.status(200).json(users)
    } catch (err) {
        
        next(err)
    }
}
module.exports = {
    getUsers
}