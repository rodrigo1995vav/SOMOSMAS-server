const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth-controller')


const ValidationOfTheRegistrationForm = require('../middlewares/validations/ValidationOfTheRegistrationForm')

router.post("/login", authController.login)

router.post("/register", ValidationOfTheRegistrationForm, authController.register)

module.exports = router