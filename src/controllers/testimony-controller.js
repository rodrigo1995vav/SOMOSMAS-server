const testimonyService = require('../services/testimony-service')
const { uploadFile } = require('../services/s3-service');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const createNewTestimony = async(req, res) => {

    console.log(req)
    
    // Uploads image to AWS S3 service and extract de key value
    const { key } = await uploadFile( req.file );
  
    
    const testimonySaved = await testimonyService.createTestimony({
      ...req.body,
      image: key
    })
  
    res.status(201).json({
      ok: true,
      entry: testimonySaved
    })
  }

  module.exports = {
    createNewTestimony
  }