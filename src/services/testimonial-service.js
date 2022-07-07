const testimonialRepository = require('../repositories/testimonial-repository')


const getAllTestimonials = async (limit,page) => {

   
    const testimonialsForPage = await testimonialRepository.getAllTestimonials(limit,page)
   
    if( !testimonialsForPage ) {
        throw new Error ('No hay testimonios')
    }
    return testimonialsForPage
}

const deleteTestimonial = async (testimonialId) =>{

    const deletedTestimonial = await testimonialRepository.deleteTestimonials(testimonialId)

    if(!deletedTestimonial){
        throw new Error('El testimonio que desea eliminar no existe')
    }

    return deletedTestimonial
}


module.exports= {
    getAllTestimonials,
    deleteTestimonial,
}