const fs = require("fs");
const util = require("util");
const s3Service = require("./s3-service");
const unlinkFile = util.promisify(fs.unlink);

const deleteTempFile = async (path) => {
  unlinkFile(path);
  return console.log("File deleted")
};

//This will return the Key to the aws Bucket in case there's a file, otherwise it will return null
const checkFileAndUpload = async (file) => {
  console.log(file)
  if (file) {
    const imageUploadResult = await s3Service.uploadFile(file)
    //Deleting image from server once it has been uploaded to aws
    deleteTempFile(file.path);
    return imageUploadResult.Key;
  };
  return null
}

module.exports = {
  deleteTempFile,
  checkFileAndUpload
};
