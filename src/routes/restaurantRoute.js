const express = require('express');

const restaurant = express.Router();
const restaurantController = require('../controllers/restaurantController');

restaurant.get('/getById', restaurantController.getById);
restaurant.get('/searchs', restaurantController.searchs);
restaurant.get('/getByCategory', restaurantController.getByCategory);
restaurant.post('/create', restaurantController.createRestaurant);
restaurant.put('/update', restaurantController.updateRestaurant);
restaurant.delete('/delete', restaurantController.deleteRestaurant);

module.exports = restaurant;
