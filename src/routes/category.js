const express = require("express");
const categoryControllers = require("../controllers/category-cntroller");
const checkAdminUser = require("../middlewares/authentication/check-admin-user");
const router = express.Router();

router.get('/', checkAdminUser ,categoryControllers.getListCategory)

module.exports = router