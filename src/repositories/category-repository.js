const { Category } = require('../models')




const saveCategory = async (newCategory) => {

    // if newCategory id is not null, it will update the category. If id is null it will create a new register

    const instancedCategory = Category.build( newCategory,{ isNewRecord: !newCategory.id } )

    await instancedCategory.save()

    return instancedCategory
}










module.exports = {
    saveCategory,
}