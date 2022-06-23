const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const organizationsRoutes = require('./organization')
const newsRoutes = require('./entry')

router.use("/users", usersRoutes);

router.use("/organizations", organizationsRoutes)

router.use("/news", newsRoutes)
module.exports = router;
