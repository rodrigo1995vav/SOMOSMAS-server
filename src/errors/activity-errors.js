class ActivitiesTableEmptyError extends Error {

    constructor( ){
        super()
        this.message = 'No hay actividades'
        this.code = 400
    }
  
}

module.exports = {
    ActivitiesTableEmptyError,
}