const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth")
const organizationsRoutes = require('./organization')
const newsRoutes = require('./news');
const contactRoutes = require('./contact');
const activitiesRoutes = require('./activities');

const testimonialRoutes = require('./testimonials')

router.use("/users", usersRoutes)

router.use("/auth", authRoutes);

router.use("/organizations", organizationsRoutes)

router.use("/news", newsRoutes);
router.use("/testimonials",testimonialRoutes)
router.use("/contacts", contactRoutes)
router.use("/activity", activitiesRoutes);





module.exports = router;
