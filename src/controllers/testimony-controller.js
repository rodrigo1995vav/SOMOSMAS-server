const testimonyService = require('../services/testimony-service');

const updateTestimony = async (req,res,next) => {
    try {
        const { id, newContent } = req.body;  //TODO Destructurar el body
        const testimonyUpdated = await testimonyService.updateTestimony(id, newContent);
        if (testimonyUpdated) {
            throw new Error('El testimonio que desea modificar no existe.');
        }
        res.status(200).json(testimonyUpdated);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    updateTestimony
}
