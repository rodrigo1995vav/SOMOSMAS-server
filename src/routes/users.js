const express = require("express");
const router = express.Router();
const userController = require('../controllers/users-controller')

router.get("/", userController.getUsers);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router



