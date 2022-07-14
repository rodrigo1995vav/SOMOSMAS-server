const { CategoriesTableEmptyError } = require("../errors/category-errors")
const categoryRepository = require("../repositories/category-repository")

const getAllCategories = async (query)=>{
const page = query.page -1
const limit = query.limit || 10
const categories =  await categoryRepository.listAllCategory(page,limit)
return categories
}

const deleteCategoryById = async (id) =>{

    const deletedCategory = await categoryRepository.deleteCategoryById(id)
    
    if(!deletedCategory)
    {
      throw new CategoriesTableEmptyError(id)
    }
  return deletedCategory 
  
  }
module.exports={
    getAllCategories,
    deleteCategoryById
}
