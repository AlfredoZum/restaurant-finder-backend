const { Router } = require('express');

const router = Router();

const user = require('./userRoute');
const food = require('./foodRoute');
const restaurant = require('./restaurantRoute');

router.use('/user', user);
router.use('/food', food);
router.use('/restaurant', restaurant);

module.exports = router;
