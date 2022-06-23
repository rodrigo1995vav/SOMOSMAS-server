
const checkAdminUser = (req, res, next) => {
  if( req.currentUser.roleId !== 1 ){
    return res.status(401).json({
      error: 'Not authorized'
    })
  } 

  next()
} 

module.exports = checkAdminUser;