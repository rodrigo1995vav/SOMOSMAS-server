const authService = require('../services/auth-service')
const { processRegister } = require('../repositories/auth-repository');
const userService = require('../services/user-service')
const { validationResult } = require('express-validator')

const login = async (req, res, next) => {
    try {
        const data = await authService.login(req.body)
        res.json({
            user: data.user,
            accessToken: data.accessToken
        })
    } catch (err) {
        res.status(400)
        res.json({ message: err.message })
    }
}

const register = async (req, res, next) => {
    try {
        const { body } = req;
        const errorsRegister = validationResult(req);
        if (!errorsRegister.isEmpty()) {
            //406 no Acceptable
            res.status(406).json(errorsRegister.mapped()) //devuelvo los errores al front por si los necesita
        } else {

            const user = await userService.userRegister({ ...body })
            res.status(200).json(user)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err)

    }
}

const getProfile = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    const decoded = jwt.decode(token)
     const id = decoded.id
     try {   
        const results = await authService.getMyProfile(id);
        res.status(200).json(results);
      } catch (err) {
              return res.status(400).json(err);
            }
  }

module.exports = {
    register,
    login,
    getProfile
}
