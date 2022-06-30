const authService = require('../services/auth-service')
<<<<<<< HEAD
const { body, validationResult } = require('express-validator');
const userService = require('../services/users');
=======
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { processRegister } = require('../repositories/auth-repository');
>>>>>>> 09e1e38bd78b5ca4e59b33f7ffdc93d135e51aef

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

<<<<<<< HEAD
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
=======
const register = async (req, res, next) => {
    try {
        const { body } = req;
        const errorsRegister = validationResult(req);

        if (!errorsRegister.isEmpty()) {
            //406 no Acceptable
            res.status(406).json(errorsRegister.mapped()) //devuelvo los errores al front por si los necesita
        } else {
            const password = bcrypt.hashSync(body.password, 10);
            const user = await processRegister({ ...body, password })
            res.status(200).json(user)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err)

>>>>>>> 09e1e38bd78b5ca4e59b33f7ffdc93d135e51aef
    }
}

module.exports = {
    login,
<<<<<<< HEAD
    getUsers
=======
    register
>>>>>>> 09e1e38bd78b5ca4e59b33f7ffdc93d135e51aef
}
