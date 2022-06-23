const { Entries, sequelize } = require('../models')

const getEntryById = async (id) =>{
    const entry = await Entries.findOne({where:{id: id}})
    return entry
}

const saveEntry = async (newEntry) => {

// if the entry Id is not null, it will update the register, if is null, it will create a new register

    const entry = Entries.build(newEntry, {
        isNewRecord: !newEntry.id,
      });
      await entry.save();

      return entry
}

const getEntryMocked = async (id) =>{
    return {id: id, name:'test name', content:'any', categoryId:2 , type: 'news'}
}
const saveEntryMocked = async (newEntry) => {

    return {id: newEntry.id, name:newEntry.name, content:newEntry.content, categoryId:newEntry.categoryId , type: newEntry.type}
}
module.exports = {
    getEntryById,
    getEntryMocked,
    saveEntry,
    saveEntryMocked,
}