const express = require("express");
const router = express.Router();
const testimonialController = require('../controllers/testimonial-controller');


router.get("/:limit/:page", testimonialController.getAllTestimonials)


module.exports = router;