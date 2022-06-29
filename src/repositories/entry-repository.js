const { Entry } = require('../models');

const findAllNews = async() => {
  const entries = await Entry.findAll({ where:{ type:"news" } });
  return entries;
}

module.exports = {
  findAllNews
}