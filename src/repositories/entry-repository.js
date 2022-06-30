const { Entry } = require('../models');

const findAllNews = async() => {
  const entries = await Entry.findAll({ where:{ type:"news" } });
  return entries;
}

const createEntry = async( entry ) => {
  const entryStored = await Entry.create( entry );
  return entryStored
}

module.exports = {
  findAllNews,
  createEntry
}