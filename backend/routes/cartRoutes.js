const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cartController');

route.get('/carts', cartController.getAllCarts);
route.get('/carts/:id', cartController.getOneCart);
route.post('/carts', cartController.addCarts);
route.patch('/carts/:id', cartController.updateCarts);
route.delete('/carts/:id', cartController.deleteCarts);

module.exports = route;