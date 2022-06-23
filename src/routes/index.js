const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const organizationsRoutes = require('./organization')
const entriesRoutes = require('./entries');

router.use("/users", usersRoutes);

router.use("/organizations", organizationsRoutes)

router.use("/", entriesRoutes);
module.exports = router;
