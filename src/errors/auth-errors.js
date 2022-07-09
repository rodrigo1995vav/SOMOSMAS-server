

 class WrongPasswordError extends Error {

    constructor(){
        super()
        this.message = 'Contraseña incorrecta.'
        this.code = 400
    }

}


class InvalidTokenError extends Error {
    constructor(){
        super()
        this.message = 'Token no válido'
        this.code = 401
    }
}

class ExpiredTokenError extends Error {
    constructor(){
        this.message = 'Token no expirado'
        this.code = 401
    }
}

module.exports ={
    WrongPasswordError,
    InvalidTokenError,
    ExpiredTokenError,
}