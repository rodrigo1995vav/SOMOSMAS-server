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
  const entrie=await findById(id)
  console.log('entrie', entrie)
  return entrie
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