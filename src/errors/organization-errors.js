

class OrganizationNotFoundError extends Error {

    constructor(){
        super()
        this.name = this.constructor.name
        this.message = 'La organizacion no existe'
        this.code = 400
    }
}

module.exports = {
    OrganizationNotFoundError,
}