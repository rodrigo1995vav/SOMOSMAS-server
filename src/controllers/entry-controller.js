const entryService   = require('../services/entry-service');
const { uploadFile } = require('../services/s3-service');

const getNewsEntries = async(req, res) => {
  try {
      const entries = await entryService.getModifiedNewsEntries();
      res.status(200).json({ entries });
  } catch (err) {
      console.log(err);
      res.status(500).json({err})
  }
  
}

const createNewEntry = async(req, res) => {

  const { image, ...rest } = req.body;

  // Uploads image to AWS S3 service and extract de key value
  const { key } = await uploadFile( req.files.file );

  // const key = 'dfe64q3jhasd3jjafrdkj';

  const entrySaved = await entryService.createEntry({
    ...rest,
    image: key,
    type: 'news'
  })

  res.status(201).json({
    ok: true,
    entry: entrySaved
  })
}

module.exports = {
  getNewsEntries,
  createNewEntry
}