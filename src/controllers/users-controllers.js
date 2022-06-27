const authService = require('../services/auth-service')
const { body, validationResult } = require('express-validator');
const userService = require('../services/users');

const login = async (req, res, next) => {
    try {
        const logged = await authService.login(req.body)
        res.json({
            logged
        })
    } catch (err) {
        res.json({ err })
    }
}

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
    login,
    getUsers
}
