const { TestimonialsTableEmptyError } = require('../errors/testimonial-errors')
const testimonialRepository = require('../repositories/testimonial-repository')


const getAllTestimonials = async (limit,page) => {

   
    const testimonialsForPage = await testimonialRepository.getAllTestimonials(limit,page)
   
    if( !testimonialsForPage ) {
        throw new TestimonialsTableEmptyError()
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