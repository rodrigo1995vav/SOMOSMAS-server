const { Members, Role_ong, sequelize } = require('../models')

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
    console.log("asd",id)
    const member = await Members.destroy({ where: { id: id } })

    return member
}

const getAllMembers = async (page, limit) => {
    const offset = page * limit;

    const { count, rows } = await Members.findAndCountAll({
        include: [{
            model: Role_ong,
            attributes: ['role_ong']
        }],
        offset: offset,
        limit: limit
    })
    return { total_members: count, total_pages: Math.ceil(count / limit), current_page: page + 1, members: rows }
}
module.exports={
    getAllMembers,
    updateMember,
    deleteMember
}
