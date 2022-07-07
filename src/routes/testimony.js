const express = require("express");
const router = express.Router();
const testimonyController = require('../controllers/testimony-controller');
const multer = require('multer');
const { validateCreateTestimony } = require("../middlewares/validations/Testimony");
const upload = multer({ dest: 'uploads/' })

router.post("/",
  upload.single('image'),
  validateCreateTestimony,
  testimonyController.createNewTestimony);

module.exports = router;