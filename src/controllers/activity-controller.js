const activitiesService = require("../services/activities-service");
const { uploadFile } = require("../services/s3-service");
const { deleteTempFile } = require("../services/deleteTempFIles");



const getAllActivity = async (req, res, next) => {
  try {
    const { query } = req;
    const page = query.page - 1;
    const allActivities = await activitiesService.getAllActivities(page);
    res.status(200).json(allActivities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createNewActivity = async (req, res, next) => {
  try {
    //Checking if there's an actual file at the request to decide the value that's gonna be sent as image field 
    const imageFileCheck = async function () {
      if (req.file) {
        const file = req.file;
        const imageUploadResult = await uploadFile(file)
        //Deleting image from server once it has been uploaded to aws
        deleteTempFile(file.path);
        return imageUploadResult;
      } else return ("");
    };

    const image = await imageFileCheck()
    const query = req.body;
    console.log(image);
    const activity = await activitiesService.createActivity(
      query,
      image.Key
    );
    res.status(200).json(activity);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllActivity,
  createNewActivity,
};
