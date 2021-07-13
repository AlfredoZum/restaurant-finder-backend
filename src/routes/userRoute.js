const express = require('express');

const user = express.Router();
const restaurantController = require('../controllers/userController');

user.post('/login', restaurantController.loginUser);
user.post('/register', restaurantController.registerUser);

module.exports = user;
