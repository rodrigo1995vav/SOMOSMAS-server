class CategoriesTableEmptyError extends Error {

    constructor( id = null ){
        super()
        this.name = this.constructor.name
        this.message = `La categoria con id: ${id} que trata de eliminar no existe`
        this.code = 400
    }
  
}


module.exports = {
    CategoriesTableEmptyError,
}