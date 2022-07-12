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

module.exports ={
    updateMember
}