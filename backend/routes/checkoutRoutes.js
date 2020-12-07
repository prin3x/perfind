const express = require('express');
const route = express.Router();
const checkoutController = require('../controllers/checkoutController');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

// route.get('/', checkoutController.getCheckout);
// route.post('/:id', checkoutController.addCheckout);
// route.patch('/:id', checkoutController.updateCheckout);



route.get('/', authentication, checkoutController.getCheckout);
route.post('/:id', authentication, checkoutController.addCheckout);
route.patch('/:id', authentication, checkoutController.updateCheckout);





module.exports = route;