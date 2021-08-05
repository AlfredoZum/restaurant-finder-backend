const { FoodService } = require('../services/foodService');

exports.findById = (req, res) => {
  const { body } = req;
  const foodService = new FoodService();
  foodService
    .findById(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Food find',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.findByRestaurant = (req, res) => {
  const { body } = req;
  const foodService = new FoodService();
  foodService
    .findByRestaurant(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Food find',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.createFood = (req, res) => {
  const { body } = req;
  const foodService = new FoodService();
  foodService
    .create(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Food add',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.updateFood = async (req, res) => {
  const { body } = req;
  const foodService = new FoodService();
  foodService
    .update(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Food update',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.deleteFood = async (req, res) => {
  const { body } = req;
  const foodService = new FoodService();
  foodService
    .delete(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Food delete',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};
