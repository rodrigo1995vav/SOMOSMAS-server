const contactRepository = require('../repositories/contact-repository')

const createContact = async (contact) => {
    if (await contactRepository.findByEmail(contact)) {
        return "Email already exist"
    } else {
        const contactStored = await contactRepository.createContact(contact)
        return contactStored
    }
}

module.exports = {
    createContact
}