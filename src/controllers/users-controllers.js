
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { processRegister } = require('../repositories/auth-repository');



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

    }
}

module.exports = {
    register
}
