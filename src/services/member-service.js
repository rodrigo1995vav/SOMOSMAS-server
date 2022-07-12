const memberRepository = require("../repositories/member-repository")
const { MemberNotFoundError } = require('../errors/member-errors');


const updateMember = async (newContent) => {
    const member = await memberRepository.updateMember
    if(!member){
        throw new MemberNotFoundError(newContent.id)
    }
    return member

}

module.exports ={
    updateMember
}