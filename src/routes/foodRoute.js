const express = require('express');

const food = express.Router();
const foodController = require('../controllers/foodController');
const tokenMiddleware = require('../middleware/tokenMiddleware');

food.post('/create', tokenMiddleware, foodController.createFood);
food.put('/update', tokenMiddleware, foodController.updateFood);
food.delete('/delete', tokenMiddleware, foodController.deleteFood);

module.exports = food;
