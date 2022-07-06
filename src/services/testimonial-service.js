const testimonialRepository = require('../repositories/testimonial-repository')


const getAllTestimonials = async (page) => {

    const testimonialsForPage = await testimonialRepository.getAllUsers(limit,page)

    if( !testimonialsForPage ) {
        throw new Error ('No hay testimonios')
    }
    return testimonialsForPage
}


module.exports= {
    getAllTestimonials,
}