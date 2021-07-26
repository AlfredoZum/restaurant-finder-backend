const express = require('express');

const restaurant = express.Router();
const restaurantController = require('../controllers/restaurantController');
const tokenMiddleware = require('../middleware/tokenMiddleware');

restaurant.get('/getById', tokenMiddleware, restaurantController.getById);
restaurant.get('/searchs', tokenMiddleware, restaurantController.searchs);
restaurant.get('/getByCategory', tokenMiddleware, restaurantController.getByCategory);
restaurant.post('/create', tokenMiddleware, restaurantController.createRestaurant);
restaurant.put('/update', tokenMiddleware, restaurantController.updateRestaurant);
restaurant.delete('/delete', tokenMiddleware, restaurantController.deleteRestaurant);

module.exports = restaurant;
