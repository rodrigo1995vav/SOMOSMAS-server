const testimonyRepository = require('../repositories/testimony-repository');

const updateTestimony = async (id, newContent) => {
    const testimonyUpdated = await testimonyRepository.updateTestimony(id, newContent);
    if (testimonyUpdated) {
        throw new Error('El testimonio que desea modificar no existe.');
    }
    return testimonyUpdated;
}

module.exports = {
    updateTestimony
}