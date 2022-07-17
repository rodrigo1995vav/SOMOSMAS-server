const express = require("express");
const router = express.Router();
const userController = require('../controllers/user-controller');
const checkAdminUser = require("../middlewares/authentication/check-admin-user");

router.get("/",checkAdminUser, userController.getUsers);

module.exports = router



