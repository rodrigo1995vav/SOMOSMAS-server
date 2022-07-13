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

const deleteMember = async (memberId) => {
    console.log(memberId)
    const member = await memberRepository.deleteMember(memberId)
    if(!member){
        console.log("error")
        throw new MemberNotFoundError(memberId)
    }
    return member
}

module.exports ={
    updateMember,
    deleteMember
} 