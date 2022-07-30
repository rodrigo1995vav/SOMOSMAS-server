const express = require("express");
const  memberController = require("../controllers/member-controller");
const checkAdminUser = require("../middlewares/authentication/check-admin-user");
const router = express.Router();



router.put('/:id', checkAdminUser, memberController.updateMember)

router.get('/',memberController.getListMember) 

module.exports = router