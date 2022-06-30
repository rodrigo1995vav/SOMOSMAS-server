
const entryRepository = require('../repositories/entry-repository')



const updateEntry = async (newContent) =>{
   
   const entry = await entryRepository.getEntryById(newContent.id)
    
    if( entry===null || !(entry.type===newContent.type) ){
        throw new Error (`La entrada que desea modificar no existe !!!`);
    }
    else{
        const updatedEntry = await entryRepository.saveEntry(newContent);
        return updatedEntry;
    }
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
