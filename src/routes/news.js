const express = require("express");
const router = express.Router();
const entriesController = require('../controllers/entries-controller');






router.get("/", entriesController.getNewsEntries);

router.put("/:id", entriesController.updateEntry)

module.exports = router;