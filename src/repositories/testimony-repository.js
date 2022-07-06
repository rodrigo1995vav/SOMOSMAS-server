const { Testimony } = require('../models/testimony');

const updateTestimony = async (id, newContent) => {
    const testimonyUpdated = await Testimony.findOne({ where: { id: id } });
    if (testimonyUpdated) {
        testimonyUpdated.set(newContent);
        await testimonyUpdated.save();
        return testimonyUpdated;
    } else {
        return null;
    }
}

module.exports = {
    updateTestimony
}
