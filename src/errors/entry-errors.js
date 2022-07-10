

class EntryNotFoundError extends Error {

   

    constructor( type = null ){
        super()
        this.name = this.constructor.name
        this.message = 'La entrada no existe!!!'
        
        if(type === 'news'){
            this.message = `La novedad no existe`
        }
        if(type === 'event'){
            this.message = `El evento no existe`
        }

        this.code = 400
    }
  
}

class EntryValidationError extends Error {

   

    constructor( msg = null ){
        super()
        this.name = this.constructor.name
        this.message = 'Error de validación'
        
        if(msg){
         this.message = msg
        }

        this.code = 400
    }
  
}

module.exports = {
    EntryNotFoundError,
    EntryValidationError,
}