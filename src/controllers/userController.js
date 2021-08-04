const jwt = require('jsonwebtoken');
const { UserService } = require('../services/userService');
const config = require('../utils/config');

exports.loginUser = async (req, res) => {
  const { body } = req;
  const userService = new UserService();
  userService
    .login(body)
    .then((result) => {
      const payload = {
        check: true,
        user: result,
      };
      const token = jwt.sign(payload, config.key, {
        expiresIn: 3600,
      });
      res.status(200).send({
        status: 200,
        result,
        token,
        message: 'User register',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.registerUser = async (req, res) => {
  const { body } = req;
  const userService = new UserService();
  userService
    .create(body)
    .then((result) => {
      const payload = {
        check: true,
        user: result,
      };
      const token = jwt.sign(payload, config.key, {
        expiresIn: 1440,
      });
      res.status(200).send({
        status: 200,
        result,
        token,
        message: 'User register',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};
