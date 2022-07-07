const testimonyRepository = require('../repositories/testimony-repository')

const createTestimony = async( testimony ) =>{
    const testimonyStored = await testimonyRepository.createTestimony(testimony);
    return testimonyStored;
  }
  
  module.exports ={
    createTestimony
  }