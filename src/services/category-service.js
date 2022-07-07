const categoryRepository = require('../repositories/category-repository')



const createCategory = async (newCategory) => {

    const savedCategory = await categoryRepository.saveCategory(newCategory)

    if(!savedCategory){
        throw new Error('No se pudo guardar la categoria')
    }

    return savedCategory

}











module.exports = {
    createCategory,
}