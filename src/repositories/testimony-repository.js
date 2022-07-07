const { Testimony, sequelize } = require('../models')

const createTestimony = async (testimony) => {
    const testimonyStored = await Testimony.create(testimony)
    return testimonyStored
}

module.exports = {
    createTestimony
}