const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if(req.method === 'OPTIONS'){
    next()
  }
  try {
      const token = req.headers.autorization.split(' ')[1];
      if(!token){
        return res.status(401).json({message:"Ne autorizovan"})
      }
      const decod = jwt.verify(token, process.env.SECRET_KEY)
      req.user = decod
      next()
  } catch (e) {
      return res.status(401).json({message:"Ne autorizovan"})
  } finally {

  }

}
