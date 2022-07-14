const express = require("express");
const router = express.Router();
const testimonialController = require('../controllers/testimonial-controller');
const { validateCreateTestimony } = require("../middlewares/validations/Testimonial");
const validateFile = require("../middlewares/file-validator");



router.get("/:limit/:page", testimonialController.getAllTestimonials)

router.post("/",
  validateFile,
  validateCreateTestimony,
  testimonialController.createNewTestimony);

  router.put("/update/:id", testimonialController.updateTestimony);

module.exports = router;
