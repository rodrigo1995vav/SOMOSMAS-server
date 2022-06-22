const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const organizationsRoutes = require('./organization')

router.use("/users", usersRoutes);

router.use("/organizations", organizationsRoutes)
module.exports = router;
