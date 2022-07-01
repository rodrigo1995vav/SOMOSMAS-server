const { Entry } = require('../models');

const findAllNews = async() => {
  const entries = await Entry.findAll({ where:{ type:"news" } });
  return entries;
}

const findById=async (id)=>{
  const entrie =await Entry.findOne({where:{ id:id }})
  if (!entrie){
    return "Entry does not exist"
  }
  return entrie
}

const createEntry = async( entry ) => {
  const entryStored = await Entry.create( entry );
  return entryStored
}

module.exports = {
  findAllNews,
  findById,
  createEntry
}