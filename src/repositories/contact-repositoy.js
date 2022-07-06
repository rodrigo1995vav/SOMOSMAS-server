const { Contact } = require('../models');

const listContact = async (page) => {
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await Contact.findAndCountAll({
        attributes: ['id', 'name'],
        offset: offset,
        limit: limit,
    })
    return { total_contacts: count, contacts: rows }
}

module.exports = {
    listContact
}