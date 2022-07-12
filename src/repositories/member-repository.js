const { Members ,sequelize } = require('../models')

const updateMember = async (newContent) => {
    const member = await Members.findOne({where:{id: id}})
    if (!member){
        return null
    }
    const updatedMember = await member.update({newContent})
    return updatedMember
}

module.exports={
    updateMember
}