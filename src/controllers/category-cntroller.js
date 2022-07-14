const categoryService= require("../services/category-service")

const getListCategory = async (req, res)=>{
   try {
    const {query}= req    
    const categories = await categoryService.getAllCategories(query)
    res.status(200).json(categories)
   } catch (err) {
    console.log(err)
    res.status(500).json({error:err.message})
   }
}

module.exports = {
    getListCategory
}