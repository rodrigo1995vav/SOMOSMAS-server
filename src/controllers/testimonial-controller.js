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

const deleteTestimonial = async (req, res) =>{

    const testimonialId = Number(req.params.id)

    try {
        const deletedTestimonial = await testimonialService.deleteTestimonial(testimonialId)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}

module.exports = {
    getAllTestimonials,
    deleteTestimonial,
}