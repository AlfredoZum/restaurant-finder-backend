const { UserService } = require('../services/userService');

exports.loginUser = async (req, res) => {
  const { body } = req;
  const userService = new UserService();
  userService
    .login(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
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
      res.status(200).send({
        status: 200,
        result,
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
