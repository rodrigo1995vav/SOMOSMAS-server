class CategoriesTableEmptyError extends Error {

    constructor( id = null ){
        super()
        this.name = this.constructor.name
        this.message = `La categoria con id: ${id} que trata de eliminar no existe`

    }

}

class CouldNotSaveCategoryError extends Error {

    constructor(category = null){
        super()
        this.name = this.constructor.name
        this.message = 'No se pudo guardar la categoria'
        if(category){
            this.message = `No se pudo guardar la categoria: ${category}`
        }
        this.code = 400
    }
  
}


module.exports = {
    CategoriesTableEmptyError,
    CouldNotSaveCategoryError
}