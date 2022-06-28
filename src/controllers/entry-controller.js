const entryService = require('../services/entry-service');

const getNewsEntries = async(req, res) => {
  try {
      const entries = await entryService.getModifiedNewsEntries();
      res.status(200).json({ entries });
  } catch (err) {
      console.log(err);
      res.status(500).json({err})
  }
  
}

module.exports = {
  getNewsEntries
}