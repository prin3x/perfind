const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cartController');

route.get('/', cartController.getAllCarts);
route.post('/:id', cartController.addCarts);
route.patch('/:id', cartController.updateCarts);
route.delete('/:id', cartController.deleteCarts);

module.exports = route;