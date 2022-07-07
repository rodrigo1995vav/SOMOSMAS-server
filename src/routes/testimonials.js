const express = require("express");
const router = express.Router();
const testimonialController = require('../controllers/testimonial-controller');


router.get("/:limit/:page", testimonialController.getAllTestimonials)
router.delete("/:id", testimonialController.deleteTestimonial)

module.exports = router;