const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const deleteTempFile = async (path) => {
  unlinkFile(path);
  return console.log("File deleted")
};

module.exports = {
  deleteTempFile,
};
