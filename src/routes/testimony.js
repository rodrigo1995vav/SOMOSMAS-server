const express = require("express");
const router = express.Router();
const testimonyController = require('../controllers/testimony-controller')

router.put("/update/:id", testimonyController.updateTestimony);

module.exports = router;