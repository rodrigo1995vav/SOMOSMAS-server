const { Members ,sequelize } = require('../models')

const getAllMembers = async(page,limit)=>{
const offset = page*limit;
   const {count, rows }= await Members.findAndCountAll({
        offset : offset,
        limit: limit
   })
   return {total_members : count , total_pages: Math.ceil(count/limit), current_page:page+1, members:rows }
}
module.exports={
    getAllMembers
}