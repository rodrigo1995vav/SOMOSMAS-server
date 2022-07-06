const contactRepository = require('../repositories/contact-repository');

const getAllContacts = async (page) => {
    const contacts = await contactRepository.listContact(page);
    return contacts;
}

module.exports = {
    getAllContacts
}
