

class OrganizationNotFoundError extends Error {

    constructor(){
        this.message = 'La organizacion no existe'
        this.code = 400
    }
}

module.exports = {
    OrganizationNotFoundError,
}