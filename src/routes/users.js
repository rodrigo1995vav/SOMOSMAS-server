const express = require("express");
const router = express.Router();
const userController = require('../controllers/users-controllers');
const ValidationOfTheRegistrationForm = require("../middlewares/validations/ValidationOfTheRegistrationForm");



router.post("/login", userController.login)
router.post("/register", ValidationOfTheRegistrationForm, userController.register)



module.exports = router;
