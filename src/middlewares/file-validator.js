const { deleteTempFile } = require("../services/fileServices");

/**
 * Middleware checks for the presence of file property
 * in request.files object.
 */
const maxSize = 1 * 1024 * 1024; //10MB
const validateFile = (req, res, next) => {
  const { mimetype } = req.file;
  const fileType = mimetype.split("/")[0];

  // In the event that the request has to come with an image for the post method to keep his way, uncomment this!
  // if ( !req.file ) {
  //   return res.status(400).json({
  //     ok: false,
  //     err: 'No files were uploaded.'
  //   });
  // }


  // it extracts the filetype of the request.files.file object
  if (fileType !== "image") {
    deleteTempFile(req.file.path)
    return res.status(400).json({error:{ message: "El archivo debe ser una imagen." }});
  }

  if (req.file.size > maxSize) {
    deleteTempFile(req.file.path)
    return res
      .status(400)
      .json({ error: { message: "El archivo supera los 10mb." } });
  }

  next();
};

module.exports = validateFile;
