const express = require('express');

const customer = express.Router();
const customerController = require('../controllers/customerController');

customer.post('/login', customerController.loginCustomer);
customer.post('/register', customerController.registerCustomer);

module.exports = customer;
