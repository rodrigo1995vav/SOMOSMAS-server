const testimonialService = require('../services/testimonial-service')
const { uploadFile } = require('../services/s3-service');


const getAllTestimonials = async (req, res, next) => {

    let page = Number(req.params.page)
    let limit = Number(req.params.limit)
    try {
       
        const allTestimonials = await testimonialService.getAllTestimonials(limit,page)

        res.json(allTestimonials)
    }
    catch (err) {
        
        res.status(500).json(err)
    }

}

const createNewTestimony = async(req, res) => {
    // Uploads image to AWS S3 service and extract de key value
    const imageFileCheck = async function () {
        if(req.file){
            const { key } = await uploadFile( req.file );
            return key
        } else {
            return ""
        }
    }

    const image = await imageFileCheck()
  
    const testimonySaved = await testimonialService.createTestimony({
      ...req.body,
      image
    })
  
    res.status(201).json({
      ok: true,
      entry: testimonySaved
    })
  }

module.exports = {
    getAllTestimonials,
    createNewTestimony
}