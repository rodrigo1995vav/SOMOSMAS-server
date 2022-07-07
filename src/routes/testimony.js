const express = require("express");
const router = express.Router();
const testimonyController = require('../controllers/testimony-controller');
const validateFields    = require('../middlewares/field-validator');
const validateFile      = require('../middlewares/file-validator');
const { check } = require('express-validator');
const multer = require('multer');
const { getFileStream } = require("../services/s3-service");
const upload = multer({ dest: 'uploads/' })

router.post("/", [
    check('name', 'name field is required'),
    check('content', 'content field is required'),
    validateFields,
    //validateFile,
  ],
  upload.single('image'),
  testimonyController.createNewTestimony);

module.exports = router;