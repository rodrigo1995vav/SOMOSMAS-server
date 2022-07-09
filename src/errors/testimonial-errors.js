class TestimonialsTableEmptyError extends Error {

    constructor( ){
        this.message = 'No hay testimonios'
        this.code = 400
    }
  
}


module.exports = {
    TestimonialsTableEmptyError,
}