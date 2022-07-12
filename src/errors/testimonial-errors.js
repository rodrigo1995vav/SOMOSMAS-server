class TestimonialsTableEmptyError extends Error {

    constructor( ){
        super()
        this.name = this.constructor.name
        this.message = 'No hay testimonios'
        this.code = 400
    }
  
}


module.exports = {
    TestimonialsTableEmptyError,
}