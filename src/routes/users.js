const express = require("express");
const router = express.Router();
const userController = require('../controllers/users-controllers');
const validationFromRegister = require("../middlewares/validations/validationFromRegister");


router.get("/users");
router.post("/login", userController.login)
router.post("/register", validationFromRegister, userController.register)



module.exports = router;
