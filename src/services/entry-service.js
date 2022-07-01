const {findAllNews, findById} = require('../repositories/entry-repository');

const getModifiedNewsEntries = async() => {
  const entries = await findAllNews();

  const modifiedEntries = entries.map( ({ name, image, createdAt }) => (
      {
        name,
        image, 
        createdAt
      }
    ) 
  )

  return modifiedEntries;
}

const getNewsById=async(id)=>{
  return await findById(id)
}

const createEntry = async( entry ) =>{
  const entryStored = await entryRepository.createEntry( entry );
  return entryStored;
}

module.exports ={
  getModifiedNewsEntries,
  getNewsById,
  createEntry
}