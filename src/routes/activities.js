const express = require("express");
const router = express.Router();
const activityController = require('../controllers/activity-controller')

router.get('/list', activityController.getAllActivity)

router.put('/:id', activityController.updateActivity)

module.exports = router