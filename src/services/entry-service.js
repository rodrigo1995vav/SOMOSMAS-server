
const entryRepository = require('../repositories/entry-repository')

const updateEntry = async (newContent) =>{
   
  //  const entry = await entryRepository.getEntryById(newContent.id)
    const entry = await entryRepository.getEntryMocked(newContent.id)
    console.log(entry)
    
    if( entry===null || !(entry.type===newContent.type) ){
        throw new Error (`La entrada que desea modificar no existe !!!`);
    }
    else{
        const updatedEntry = await entryRepository.saveEntryMocked(newContent);
        return updatedEntry;
    }
}

module.exports={
    updateEntry
}