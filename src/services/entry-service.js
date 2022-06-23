
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

module.exports={
    updateEntry
}