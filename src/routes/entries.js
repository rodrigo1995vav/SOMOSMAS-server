const { check } = require('express-validator');
const express = require("express");
const router = express.Router();
const entriesController = require('../controllers/entries-controller');
const validateFields    = require('../middlewares/field-validator');
const validateFile      = require('../middlewares/file-validator');

router.get("/news", entriesController.getNewsEntries);

router.put("/news/:id" ,entriesController.updateNewsEntry);
router.post("/news", [
  check('name', 'name field is required').not().isEmpty(),
  check('content', 'content field is required').not().isEmpty(),
  check('categoryId', 'categoryId field is required').isInt(),
  validateFields,
  validateFile,
],
entriesController.createNewEntry);

module.exports = router;