
class UserNotFoundError extends Error {

    constructor( {email = null, id = null} ){
        super()
        this.name = this.constructor.name
        this.message = 'No se encontró al usuario'

        if (email){
        this.message = `Usuario con email: ${email} no se encontró`
        }

        if(id){
        this.message = `Usuario con id ${id} no existe`
        }
   
        this.code = 400
    }
  
}

class UsersTableEmptyError extends Error {
    constructor ( ) {
        super()
        this.name = this.constructor.name
        this.message = 'No hay usuarios'
        this.code = 400
    }
}





module.exports = {
    UserNotFoundError,
    UsersTableEmptyError,
 
}






