const memberRepository = require("../repositories/member-repository")
const { MemberNotFoundError } = require('../errors/member-errors');


const updateMember = async (newContent) => {
    console.log(newContent)
    const member = await memberRepository.updateMember(newContent)
    if(!member){
        console.log("error")
        throw new MemberNotFoundError(newContent.id)
    }
    return member
}


const getListAllMembers = async (query) => {
    const page = Number(query.page) - 1;
    const limit = Number(query.limit) || 10
    const members = await memberRepository.getAllMembers(page, limit)
    return members
}

module.exports={
    getListAllMembers,
    updateMember
}