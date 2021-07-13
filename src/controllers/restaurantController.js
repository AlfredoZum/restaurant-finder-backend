const { RestaurantService } = require('../services/restaurantService');

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
