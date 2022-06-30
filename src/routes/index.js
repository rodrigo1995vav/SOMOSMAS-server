const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const authRoutes =require("./auth")
const organizationsRoutes = require('./organization')
const newsRoutes = require('./news');

router.use("/users", usersRoutes)

router.use("/auth", authRoutes);

router.use("/organizations", organizationsRoutes)

<<<<<<< HEAD
router.use("/", entriesRoutes);


=======
router.use("/news", newsRoutes);
>>>>>>> main

module.exports = router;
