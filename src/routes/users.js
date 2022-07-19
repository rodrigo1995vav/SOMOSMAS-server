const express = require("express");
const router = express.Router();
const userController = require('../controllers/user-controller');
const checkAdminUser = require("../middlewares/authentication/check-admin-user");

router.get("/", checkAdminUser, userController.getUsers);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router



