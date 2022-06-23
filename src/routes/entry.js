const express = require("express");
const router = express.Router();
const entryController = require('../controllers/entry-controller')

router.put("/:id", entryController.updateNewsEntry);

module.exports = router;