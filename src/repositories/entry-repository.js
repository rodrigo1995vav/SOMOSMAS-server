const { Entry } = require('../models')

const getEntryById = async (id) =>{
    const entry = await Entries.findOne({where:{id: id}})
    return entry
}


const updateEntry = async (newContent) =>{
  const updatedEntries = await Entry.update( newContent ,{ where: { id:newContent.id,
                                                                type:newContent.type }})
    if(updatedEntries.length === 0){
      return null
    }
    else{
        return updatedEntries
    }
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
    updateEntry,
    getEntryById,
    findAllNews,
    createEntry,
}




