const { Contact } = require('../models')

const createContact = async (contact) => {
    const storedContact = await Contact.create(contact);
    return storedContact
}


module.exports = {
    createContact
}