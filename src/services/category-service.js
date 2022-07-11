const categoryRepository = require("../repositories/category-repository")

const getAllCategories = async (query)=>{
const page = query.page -1
const limit = query.limit || 10
const categories =  await categoryRepository.listAllCategory(page,limit)
return categories
}
module.exports={
    getAllCategories
}
