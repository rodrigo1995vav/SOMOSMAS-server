const { Members ,sequelize } = require('../models')

const updateMember = async (newContent) => {
    const memberUpdated = await Members.update(newContent,{where:{id: newContent.id}})
    if (memberUpdated[0]===0){
        
        return null
    }
    return "Member updated"
}

module.exports={
    updateMember
}