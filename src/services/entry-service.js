
const entryRepository = require('../repositories/entry-repository')



const updateEntry = async (newContent) =>{
   
   const entry = await entryRepository.updateEntry(newContent)
    
    if( entry ){
        throw new Error (`La entrada que desea modificar no existe !!!`);
    }
        return entry
    
}


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
  createEntry,
  updateEntry,
}
