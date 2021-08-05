const { Router } = require('express');

const router = Router();

const user = require('./userRoute');
const food = require('./foodRoute');
const customer = require('./customerRoute');
const restaurant = require('./restaurantRoute');

router.use('/user', user);
router.use('/food', food);
router.use('/customer', customer);
router.use('/restaurant', restaurant);

module.exports = router;
