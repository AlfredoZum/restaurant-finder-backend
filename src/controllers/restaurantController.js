const { RestaurantService } = require('../services/restaurantService');

exports.getById = async (req, res) => {
  const { body } = req;
  const restaurantService = new RestaurantService();
  restaurantService
    .getById(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Restaurant find',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};
exports.searchs = async (req, res) => {
  const { body } = req;
  const restaurantService = new RestaurantService();
  restaurantService
    .searchs(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Restaurant finds',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.getByCategory = async (req, res) => {
  const { body } = req;
  const restaurantService = new RestaurantService();
  restaurantService
    .getByCategory(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Restaurants find',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.createRestaurant = async (req, res) => {
  const { body } = req;
  const restaurantService = new RestaurantService();
  restaurantService
    .create(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Restaurant add',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.updateRestaurant = async (req, res) => {
  const { body } = req;
  const restaurantService = new RestaurantService();
  restaurantService
    .update(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Restaurant add',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};

exports.deleteRestaurant = async (req, res) => {
  const { body } = req;
  const restaurantService = new RestaurantService();
  restaurantService
    .delete(body)
    .then((result) => {
      res.status(200).send({
        status: 200,
        result,
        message: 'Restaurant delete',
      });
    })
    .catch((error) => {
      res.status(401).send({
        status: 401,
        message: error.message,
      });
    });
};
