const { Entry } = require('../models')

const getEntryById = async (id) =>{
    const entry = await Entries.findOne({where:{id: id}})
    return entry
}

const saveEntry = async (newEntry) => {

// if the entry Id is not null, it will update the register, if is null, it will create a new register

    const entry = Entry.build(newEntry, {
        isNewRecord: !newEntry.id,
      });
      await entry.save();

      return entry
}
const findAllNews = async() => {
    const entries = await Entry.findAll({ where:{ type:"news" } });
    return entries;
  }

  const createEntry = async( entry ) => {
    const entryStored = await Entry.create( entry );
    return entryStored
  }


module.exports = {
    getEntryById,
    saveEntry,
    findAllNews,
    createEntry,
}




