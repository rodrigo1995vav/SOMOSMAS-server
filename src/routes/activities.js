const express = require("express");
const router = express.Router();
const activityController = require('../controllers/activity-controller');
const { validateCreateActivity } = require("../middlewares/validations/Activity");

router.get('/list', activityController.getAllActivity)

router.post('/activities', validateCreateActivity, activityController.createNewActivity)

module.exports = router