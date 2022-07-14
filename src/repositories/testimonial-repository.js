const { Testimonial } = require('../models')
const { Testimony, sequelize } = require('../models')

const getAllTestimonials = async (limit , page) => {


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

const createTestimony = async (testimony) => {
    const testimonyStored = await Testimony.create(testimony)
    return testimonyStored
}

const updateTestimony = async (id, newContent) => {
    const testimonyUpdated = await Testimonial.findOne({ where: { id: id } });
    if (testimonyUpdated) {
        testimonyUpdated.set(newContent);
        await testimonyUpdated.save();
        return testimonyUpdated;
    } else {
        return null;
    }
}



module.exports= {
    getAllTestimonials,
    createTestimony,
    updateTestimony

}