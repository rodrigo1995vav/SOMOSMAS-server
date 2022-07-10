const { Members ,sequelize } = require('../models')

const getAllMembers = async(page,limit)=>{
const offset = page*limit;
   const {count, rows }= await Members.findAndCountAll({
        offset : offset,
        limit: limit
   })
   return {total_members : count ,  members:rows }
}
module.exports={
    getAllMembers
}