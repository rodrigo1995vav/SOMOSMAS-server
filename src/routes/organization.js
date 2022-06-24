const express = require("express");
const router = express.Router();
const organizationController = require('../controllers/organization-controllers')
const multer = require('multer')
const upload = multer({ dest: 'public/' })

router.get("/:id/public", organizationController.getPublicData);


router.post("/img", upload.single('image'), async (req, res, next) => {
    const file = req.file
    console.log(file)
})

module.exports = router;