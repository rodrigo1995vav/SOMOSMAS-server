const { Testimony } = require('../models')

const getAllTestimonials = async (limit , page) => {


    const offset = page * limit;

    const { count, rows } = await Testimony.findAndCountAll({
        offset: offset,
        limit: limit,
    })
        if(count === 0 ){
            return null
        }

    return { total_testimonials: count, testimonials: rows }
}


const deleteTestimonial = async (id) =>{
  const testimonialInstance =  await Testimony.findOne({ where: { id: id } })

  if ( !testimonialInstance){
    return null
}
  await testimonialInstance.destroy()
  
  return testimonialInstance
}


module.exports= {
    getAllTestimonials,
    deleteTestimonial,

}