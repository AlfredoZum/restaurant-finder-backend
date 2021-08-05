const express = require('express');

const user = express.Router();
const userController = require('../controllers/userController');

user.post('/login', userController.loginUser);
user.post('/register', userController.registerUser);

module.exports = user;
