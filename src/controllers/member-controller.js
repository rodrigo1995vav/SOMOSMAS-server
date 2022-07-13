const memberService = require("../services/member-service");
const fileServices = require("../services/fileServices");

const updateMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    const image = await fileServices.checkFileAndUpload(req.file);
    const memberSaved = await memberService.updateMember({
      ...req.body,
      image,
      id,
    });
    res.status(201).json(memberSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    const memberDeleted = await memberService.deleteMember(id);
    //Delete member image from s3, currently we don't have permission to delete files from the bucket (uncomment when we do)
    //const image = await fileServices.deleteFileFromS3(memberDeleted.key)
    //console.log(image)
    res.status(201).json({message: "Miembro eliminado exitosamente", userDeleted:memberDeleted});
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  updateMember,
  deleteMember,
};
