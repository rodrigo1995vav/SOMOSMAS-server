const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const authRoutes = require("./auth")
const organizationsRoutes = require('./organization')
const newsRoutes = require('./news');
const contactRoutes = require('./contact');
const activitiesRoutes = require('./activities');
const memberRoutes = require('./members')
const categoryRoutes = require('./category')
const testimonialRoutes = require('./testimonials')

router.use("/users", usersRoutes)

router.use("/auth", authRoutes);

router.use("/organizations", organizationsRoutes)

router.use("/news", newsRoutes);

router.use("/testimonials", testimonialRoutes)

router.use("/contacts", contactRoutes)

router.use("/activity", activitiesRoutes);

<<<<<<< HEAD
router.use("/members", memberRoutes);


=======
router.use("/categories", categoryRoutes);
>>>>>>> d78071341d038f1813df2ad1b52ac1e06042db73




module.exports = router;
