const { validationResult } = require("express-validator");
const { deleteTempFile } = require("../services/deleteTempFIles");

const validateFields = (req, res, next) => {

    const errors = validationResult(req);
    //Since the validation of the fields is made outside multer, multer will upload the file to the server first, so in the event that the fields are invalid the file must be deleted.
    if(!errors.isEmpty()){
        if (req.file){setTimeout(()=>deleteTempFile(req.file.path),2000)}
        return res.status(400).json(errors);
    }

    next();
}

module.exports = validateFields;