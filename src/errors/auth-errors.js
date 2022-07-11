

 class WrongPasswordError extends Error {

    constructor(){
        super()
        this.name = this.constructor.name
        this.message = 'Contraseña incorrecta.'
        this.code = 400
    }

}


class InvalidTokenError extends Error {
    constructor(){
        super()
        this.name = this.constructor.name
        this.message = 'Token no válido'
        this.code = 401
    }
}

class ExpiredTokenError extends Error {
    constructor(){
        super()
        this.name = this.constructor.name
        this.message = 'Token no expirado'
        this.code = 401
    }
}


class RegisterValidationError extends Error {
    constructor(validationErrors = null){
        super()
        this.name = this.constructor.name
        this.message = 'Error de validacion'
        this.validationErrors = validationErrors
        this.code = 406
    }
}

class CredentialsTakenError extends Error {

    constructor ( email = null ) {
        super()
        this.name = this.constructor.name
        this.message = 'Ya existe un usuario con esas credenciales'

        if (email){
         this.message = `Usuario con email: ${email} ya existe.`
        }
   
        this.code = 400
    }
  
}

module.exports ={
    WrongPasswordError,
    InvalidTokenError,
    ExpiredTokenError,
    RegisterValidationError,
    CredentialsTakenError,
}