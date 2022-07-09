class ActivitiesTableEmptyError extends Error {

    constructor( ){
        this.message = 'No hay actividades'
        this.code = 400
    }
  
}

module.exports = {
    ActivitiesTableEmptyError,
}