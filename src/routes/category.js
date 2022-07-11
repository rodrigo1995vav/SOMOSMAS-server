const express = require("express");
const categoryControllers = require("../controllers/category-cntroller");
const router = express.Router();

router.get('/',categoryControllers.getListCategory)

module.exports = router