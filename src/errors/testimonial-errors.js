class TestimonialsTableEmptyError extends Error {

    constructor( ){
        super()
        this.message = 'No hay testimonios'
        this.code = 400
    }
  
}


module.exports = {
    TestimonialsTableEmptyError,
}