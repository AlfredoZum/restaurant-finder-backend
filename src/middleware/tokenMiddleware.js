const jwt = require('jsonwebtoken');
const config = require('../utils/config');

module.exports = async function sessionValidate(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  // Remove Bearer from string
  token = token.replace(/^Bearer\s+/, '');
  // const token = req.headers['access-token'];
  if (token) {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, config.key, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: 'Token invalid' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.send({
      mensaje: 'Token not found.',
    });
  }
};
