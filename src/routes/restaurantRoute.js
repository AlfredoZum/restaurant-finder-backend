const express = require('express');

const restaurant = express.Router();
const restaurantController = require('../controllers/restaurantController');

restaurant.post('/create', restaurantController.createRestaurant);

module.exports = restaurant;
