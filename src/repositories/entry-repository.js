
const { Entry } = require('../models')

const getEntryById = async (id) =>{
    const entry = await Entry.findOne({where:{id: id}})
    return entry
}

const deleteEntry= async(id) =>{
  const entry = await Entry.findOne({where:{id: id}})
  if (entry) {
    const resp=await Entry.destroy({where:{id: id}})
    return {
      status: true,
      message: 'deleted successfully',
      payload: resp
    }
  } else{
    return {
      status: false,
      message: 'Entry not found',
    }
  }
}

const updateEntry = async (newContent) =>{

  const updatedEntry = await Entry.findOne({ where: { id:newContent.id,
                                                    type:newContent.type }})
  if(updatedEntry){
    updatedEntry.set(newContent)
    await updatedEntry.save()
    return updatedEntry
  }
  else{
    return null
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
    deleteEntry
}




