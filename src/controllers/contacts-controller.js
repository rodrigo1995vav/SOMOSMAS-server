const contactService = require('../services/contact-service');

const getAllContacts = async (req, res, next) => {
    try {
        const { query } = req
        const page = query.page - 1;
        const allContacts = await contactService.getAllContacts(page)
        res.status(200).json(allContacts)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getAllContacts
}
