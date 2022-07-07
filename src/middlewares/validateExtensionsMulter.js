const validateExtensionMulter = (req, file, cb) => { //
    const { mimetype } = file;
    const fileType = mimetype.split("/")[0];
    if (fileType === "image") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
  
  module.exports = {
    validateExtensionMulter,
  };