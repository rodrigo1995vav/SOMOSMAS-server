const categoryService = require('../services/category-service')


class CategoryDto {
    constructor({id, name ,description = ''}){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    validateName(){
       
        if( !this.name) {
            throw new Error('Por favor completar el nombre')
        }
        console.log(typeof(this.name))
        if(typeof(this.name) === String){
            throw new Error('El nombre debe ser tipo String')
        }
     
    }
}


const createCategory = async (req, res) =>{

    const categoryDto = new CategoryDto ({...req.body , id: req.params.id})

    try {
        categoryDto.validateName()

     const newCategory =  await categoryService.createCategory(categoryDto)

     res.json({categoryCreated: newCategory})

    } catch (err) {
        res.status(400)
        res.json({error: err.message})
    }
}





module.exports = {
    createCategory,
}