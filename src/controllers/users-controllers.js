const authService = require('../services/auth-service')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { processRegister } = require('../repositories/auth-repository');

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

const register = async (req, res, next) => {
    try {
        const { body } = req;
        const errorsRegister = validationResult(req);
        if (!errorsRegister.isEmpty()) {
            //406 no Acceptable
            res.status(406).json({ ...errorsRegister }) //devuelvo los errores al front por si los necesita
        }
        const password = bcrypt.hashSync(body.password, 10);

        const user = await processRegister({ ...body, password })
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    login,
    register
}
