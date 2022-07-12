const testimonialService = require('../services/testimonial-service')

const fileServices = require("../services/fileServices");


const getAllTestimonials = async (req, res, next) => {

    let page = Number(req.params.page)
    let limit = Number(req.params.limit)
    try {

        const allTestimonials = await testimonialService.getAllTestimonials(limit, page)

        res.json(allTestimonials)
    }
    catch (err) {
        
        next(err)
    }

}

const createNewTestimony = async (req, res) => {
    try {
        console.log(req)
        const image = await fileServices.checkFileAndUpload(req.file)
        const testimonySaved = await testimonialService.createTestimony({
            ...req.body,
            image
        })
        res.status(201).json(testimonySaved)
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllTestimonials,
    createNewTestimony
}