/**
 * Middleware checks for the presence of file property
 * in request.files object. 
 */

const validateFile = (req, res, next) => {

  if ( !req.files || !req.files.file) {

    return res.status(400).json({
      ok: false,
      err: 'No files were uploaded.'
    });

  }else {

    // it extracts the filetype of the request.files.file object
    const { mimetype } = req.files.file;
    const fileType = mimetype.split('/')[0];
    if(fileType !== 'image'){
      return res.status(400).json({
        ok: false,
        err: 'Incorrect file format.'
      });
    }

  }

  next();
}

module.exports = validateFile;