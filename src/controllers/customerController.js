const jwt = require('jsonwebtoken');
const { CustomerService } = require('../services/customerService');
const config = require('../utils/config');

exports.loginCustomer = async (req, res) => {
  const { body } = req;
  const customerService = new CustomerService();
  customerService
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
        message: 'User login',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.registerCustomer = async (req, res) => {
  const { body } = req;
  const customerService = new CustomerService();
  customerService
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
