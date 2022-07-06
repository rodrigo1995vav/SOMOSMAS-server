const { Testimonial } = require('../models')

const getAllTestimonials = async (limit , page) => {

    const limit = limit;

    const offset = page * limit;

    const { count, rows } = await Testimonial.findAndCountAll({
        offset: offset,
        limit: limit,
    })
        if(count === 0 ){
            return null
        }

    return { total_testimonials: count, testimonials: rows }
}
module.exports= {
    getAllTestimonials,
}