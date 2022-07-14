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

const updateTestimony = async (req,res,next) => {
    try {
        const { id } = req.params;
        const { newContent } = req.body;  //TODO Destructurar el body
        const testimonyUpdated = await testimonialService.updateTestimony(id, newContent);
        if (testimonyUpdated) {
            throw new Error('El testimonio que desea modificar no existe.');
        }
        res.status(200).json(testimonyUpdated);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports = {
    getAllTestimonials,
    createNewTestimony,
    updateTestimony
}