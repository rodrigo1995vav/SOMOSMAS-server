const express = require("express");
const router = express.Router();
const entryController = require('../controllers/entry-controller');






router.get("/", entryController.getNewsEntries);


module.exports = router;