const entryRepository = require('../repositories/entry-repository');

const getModifiedNewsEntries = async() => {
  const entries = await entryRepository.findAllNews();

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

const createEntry = async( entry ) =>{
  const entryStored = await entryRepository.createEntry( entry );
  return entryStored;
}

module.exports ={
  getModifiedNewsEntries,
  createEntry
}