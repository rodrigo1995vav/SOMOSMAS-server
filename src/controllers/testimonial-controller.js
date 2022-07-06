const testimonialService = require('../services/testimonial-service')


const getAllTestimonials = async (req, res, next) => {

    try {
        let page = req.params.page
        let limit = req.params.limit
        page = page - 1;
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