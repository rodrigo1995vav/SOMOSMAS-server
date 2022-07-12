const contactService = require('../services/contact-service')


const storeContact = async (req, res, next) => {
    try {
        const newContact = req.body
        console.log(req.body)
        const contactStored = await contactService.createContact(newContact)
        res.json(contactStored)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    storeContact
}