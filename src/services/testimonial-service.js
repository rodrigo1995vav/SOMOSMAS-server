const testimonialRepository = require('../repositories/testimonial-repository')


const getAllTestimonials = async (limit,page) => {

   
    const testimonialsForPage = await testimonialRepository.getAllTestimonials(limit,page)
   
    if( !testimonialsForPage ) {
        throw new Error ('No hay testimonios')
    }
    return testimonialsForPage
}

const createTestimony = async( testimony ) =>{
    const testimonyStored = await testimonialRepository.createTestimony(testimony);
    return testimonyStored;
  }


module.exports= {
    getAllTestimonials,
    createTestimony
}