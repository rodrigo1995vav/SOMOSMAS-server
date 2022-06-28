const authService = require('../services/auth-service')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');



const login = async (req, res, next) => {
    try {
        const logged = await authService.login(req.body)
        res.json({
            logged
        })
    } catch (err) {
        res.json({err})
    }
}

const getProfile = async (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  const decoded = jwt.decode(token)
   const id = decoded.id
   try {   
      const results = await authService.getMyProfile(id);
      res.status(200).json(results);
    } catch (err) {
            return res.status(400).json(err);
          }
}



module.exports={
    login,
    getProfile
    
}
