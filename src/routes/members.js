const express = require("express");
const  memberController = require("../controllers/memeber-controller");
const checkAdminUser = require("../middlewares/authentication/check-admin-user");
const router = express.Router();

router.get('/',checkAdminUser,memberController.getListMember)

module.exports = router