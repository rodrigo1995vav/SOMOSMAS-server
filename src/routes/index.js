const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth")
const organizationsRoutes = require('./organization')
const newsRoutes = require('./news');
const activitiesRoutes = require('./activities');
const testimonyRoutes = require ('./testimony')


router.use("/users", usersRoutes)

router.use("/auth", authRoutes);

router.use("/organizations", organizationsRoutes)

router.use("/news", newsRoutes);

router.use("/activity", activitiesRoutes);



router.use("/testimonials", testimonyRoutes)




module.exports = router;
