const multer = require("multer");
const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activity-controller");
const validateFile = require("../middlewares/file-validator");
const {
  validateCreateActivity,
} = require("../middlewares/validations/Activity");
const { uploadFile, getFileStream } = require("../services/s3-service");
const { validateExtensionMulter } = require("../middlewares/validateExtensionsMulter");

const maxSize = 10 * 1024 * 1024; // for 10MB

const upload = multer({
  dest: "uploads/",
  fileFilter: validateExtensionMulter,
  limits: { fileSize: maxSize },
});

router.get("/list", activityController.getAllActivity);

// In the event that the request has to come with an image for the post method to keep his way, put the validateFile function as a middleware next to upload.single
router.post(
  "/",
  upload.single("image"),
  validateCreateActivity,
  activityController.createNewActivity
);

//Retrieves the image from aws
router.get("/image/:key", (req, res) => {
  const key = req.params.key;
  console.log(key);
  const result = getFileStream(key);
  result.pipe(res);
});

module.exports = router;
