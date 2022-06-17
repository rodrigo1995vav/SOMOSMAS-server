const express = require("express");
const router = express.Router();
const organizationController = require('../controllers/organization-controllers')

router.get("/:id/public", organizationController.getPublicData);

module.exports = router;