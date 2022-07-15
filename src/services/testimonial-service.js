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

  const updateTestimony = async (newContent) => {
    const testimonyUpdated = await testimonialRepository.updateTestimony(newContent);
    if (!testimonyUpdated) {
        throw new Error('El testimonio que desea modificar no existe.');
    }
    return testimonyUpdated;
}


module.exports= {
    getAllTestimonials,
    createTestimony,
    updateTestimony
}