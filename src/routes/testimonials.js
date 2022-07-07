const express = require("express");
const router = express.Router();
const testimonialController = require('../controllers/testimonial-controller');
const multer = require('multer');
const { validateCreateTestimony } = require("../middlewares/validations/Testimonial");
const upload = multer({ dest: 'uploads/' })


router.get("/:limit/:page", testimonialController.getAllTestimonials)

router.post("/",
  upload.single('image'),
  validateCreateTestimony,
  testimonialController.createNewTestimony);


module.exports = router;