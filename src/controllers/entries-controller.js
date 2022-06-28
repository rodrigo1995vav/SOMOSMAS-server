const {getModifiedNewsEntries, getNewsById} = require('../services/entry-service');

const getNewsEntries = async(req, res) => {
  try {
      const entries = await getModifiedNewsEntries();
      res.status(200).json({ entries });
  } catch (err) {
      console.log(err);
      res.status(500).json({err})
  }
  
}

const getById= async (req, res)=>{
  const {id}=req.params
  console.log('este es lo que muestra id',id)
  try{
    const entries= await getNewsById(id)
    res.status(200).json({
      status:true,
      message:"Request result",
      payload:entries
    })
  } catch (err) {
    console.log('err',err)
    res.status(500).json({err})
  }
}

module.exports = {
  getNewsEntries,
  getById
}