const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) => {
  let { token } = req.cookies;

  if (token) {
    try {
      const decoded = jwt.verify(token, 'secret-key');
      req.user = decoded; 
      next();
    } catch (error) {
      console.error(error); 
      console.log('Invalid token or authentication failed');
    }
  } else {
    return res.redirect('/login');
  }
};

module.exports = userAuth;










