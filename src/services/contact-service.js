const contactRepository = require('../repositories/contact-repository')

const createContact = async (contact) => {
    const contactStored = await contactRepository.createContact(contact)
    return contactStored
}

module.exports = {
    createContact
}