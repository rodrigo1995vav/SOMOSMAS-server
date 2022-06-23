const express = require("express");
const router = express.Router();
const entriesController = require('../controllers/entries-controller');

router.get("/news", entriesController.getNewsEntries);

module.exports = router;