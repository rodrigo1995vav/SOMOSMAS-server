const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const organizationsRoutes = require('./organization')
const entriesRoutes = require('./entries');
const userRouter = require('./user')

router.use("/auth", usersRoutes);

router.use('/users', userRouter)

router.use("/organizations", organizationsRoutes)

router.use("/", entriesRoutes);

module.exports = router;
