const { deleteTempFile } = require("../services/fileServices");

/**
 * Middleware checks for the presence of file property
 * in request.files object.
 */
const maxSize = 10 * 1024 * 1024; //10MB
const validateFile = async (req, res, next) => {
  var errorFileType;
  var errorFileSize;
  const error = []

  // In the event that the request has to come with an image for the post method to keep his way, uncomment this!
  // if ( !req.file ) {
  //   return res.status(400).json({
  //     ok: false,
  //     err: 'No files were uploaded.'
  //   });
  // }

  if (req.file) {
    const { mimetype } = req.file;
    const fileType = mimetype.split("/")[0];
    // it extracts the filetype of the request.files.file object
    if (fileType !== "image") {
      errorFileType = {
        msg: "El archivo debe ser una imagen.",
        param: "image",
        location: "file",
      };
      error.push(errorFileType) 
    }

    if (req.file.size > maxSize) {
      errorFileSize = {
        msg: "El archivo supera los 10mb.",
        param: "image",
        location: "file",
      };
      error.push(errorFileSize) 
    }

    if (error.length !== 0) {
      await deleteTempFile(req.file.path);
      return res.status(400).json({ error: error });
    }
  }

  next();
};

module.exports = validateFile;
