const { Contact } = require('../models')

const createContact = async (contact) => {
    const storedContact = await Contact.create(contact);
    return storedContact
}

const findByEmail = async (contact) => {
    const searchedContact = await Contact.findOne({ where: { email: contact.email } })
    return searchedContact
}

module.exports = {
    createContact,
    findByEmail
}