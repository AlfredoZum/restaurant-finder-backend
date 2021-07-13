const { Router } = require('express');

const router = Router();

const user = require('./userRoute');
const restaurant = require('./restaurantRoute');

router.use('/user', user);
router.use('/restaurant', restaurant);

module.exports = router;
