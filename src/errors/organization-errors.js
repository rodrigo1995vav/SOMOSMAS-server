

class OrganizationNotFoundError extends Error {

    constructor(){
        super()
        this.message = 'La organizacion no existe'
        this.code = 400
    }
}

module.exports = {
    OrganizationNotFoundError,
}