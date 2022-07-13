const { Members ,sequelize } = require('../models')

const updateMember = async (newContent) => {
    const member = await Members.findOne({where:{id: newContent.id}})
    if (!member){

        return null
    }
    member.set(newContent)
    await member.save()
    return member
}

const deleteMember = async (id) => {
    const member = await Members.findByPk(id)
    if (!member){
        return null
    }
    member.destroy()
    return member
}



module.exports={
    updateMember,
    deleteMember
} 