const testimonialService = require('../services/testimonial-service')


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

module.exports = {
    getAllTestimonials
}