const { CouldNotSaveCategoryError, thereIsNoCategory } = require('../errors/category-errors')
const categoryRepository = require("../repositories/category-repository")

const createCategory = async (newCategory) => {

    const savedCategory = await categoryRepository.saveCategory(newCategory)

    if (!savedCategory) {
        throw new CouldNotSaveCategoryError(newCategory.name)
    }

    return savedCategory
}


const getAllCategories = async (query) => {
    const page = query.page - 1
    const limit = query.limit || 10
    const categories = await categoryRepository.listAllCategory(page, limit)
    return categories
}


const updateCategory = async (id, body) => {
    const checkCategory = await categoryRepository.getCategoryById(id);
    if (!checkCategory) {
        throw new thereIsNoCategory()
    }
    checkCategory.name = body.name;
    checkCategory.description = body.description;
    checkCategory.updatedAt = new Date();
    const updatedCategory = await checkCategory.save()//de esta forma retorna la data para el front, paran o hacer un nuevo pedido para actualizar al data 

    return updatedCategory
}


const deleteCategoryById = async (id) => {

    const deletedCategory = await categoryRepository.deleteCategoryById(id)

    if (deletedCategory === 0) {
        throw new CategoriesTableEmptyError(id)
    }
    return deletedCategory
}


module.exports = {
    getAllCategories,
    deleteCategoryById,
    createCategory,
    updateCategory,
}
