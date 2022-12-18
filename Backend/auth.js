const jwt = require('jsonwebtoken');

function generateToken(user) {
    if(!userInfo){
        return null;
  }
  
  return jwt.sign(userInfo, process.env.JWT_SECRET,{
    expiresIn: '1h'
  }) 
}

module.exports.generateToken = generateToken;