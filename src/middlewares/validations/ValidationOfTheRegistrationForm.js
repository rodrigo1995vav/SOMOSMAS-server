const path = require('path')
const { body } = require('express-validator')


module.exports = [
    body('firstName')
        .notEmpty().withMessage('Debe completar el compo nombre')
        .isLength({ min: 2 }).withMessage('El campo nombre Debe tener al menos dos caracteres'),
    body('lastName').notEmpty().withMessage('Debe completar el compo apellido')
        .isLength({ min: 2 }).withMessage('El campo apellido Debe tener al menos dos caracteres'),
    body('email').notEmpty().withMessage('Debe completar el campo email')
        .isEmail().withMessage('Debe ingresar un mail valido'),
    body('password').notEmpty().withMessage('Debe completar el campo contraseña')
        .isLength({ min: 8 }).withMessage("Su contraseña debe tener al menos 8 caracteres")


]