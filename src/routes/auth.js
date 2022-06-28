const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth-controller')
const authService = require ('../services/auth-service')


router.post("/login", authController.login)


module.exports = router