const entryService = require('../services/entry-service')

class EntryDto {

    //id property can be null because received data can be a new record

    constructor ({id,title, image, content, category, type}){
        this.id = id,
        this.name = title,
        this.image = image, 
        this.content = content,
        this.categoryId = category
        this.type = type
    }

    validate(){
      
        const msg = '';
       
        if(!this.name) msg = msg +' Título';
          
        if(!this.image) msg = msg+' Imagen';
          
        if(!this.content) msg = msg +' Contenido';
         
        if(!this.categoryId) msg = msg +' Categoría';
      
        if(msg!==''){
            throw new Error ( `Llenar campos vacíos:${msg}` );
        }
    }
}

const updateNewsEntry = async (req,res,next)=>{

   
    const newsEntryDto = new EntryDto ({...req.body, id: req.params.id, type: 'news'});


    
    try {

        newsEntryDto.validate();
        const entry = await entryService.updateEntry(newsEntryDto)

        res.json({entry:entry});

    } catch (err) {
        res.status(400)
        console.log(err)
        res.json({err:err});
    }
}


module.exports={
    updateNewsEntry
}

