const { Entry } = require('../models');

const findAllNews = async() => {
  const entries = await Entry.findAll({ where:{ type:"news" } });
  return entries;
}

const findById=async (id)=>{
  console.log('mostrando id', id)
  const entrie =await Entry.findAll({where:{ type:"news" }})
  console.log('entrie', entrie)
  return entrie
}

module.exports = {
  findAllNews,
  findById
}