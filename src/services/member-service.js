const memberRepository = require("../repositories/member-repository")

const getListAllMembers= async(query)=>{
    const page = query.page -1 ;
    const limit = query.limit || 10
  const members= await memberRepository.getAllMembers(page,limit)
  return members
}

module.exports={
    getListAllMembers
}