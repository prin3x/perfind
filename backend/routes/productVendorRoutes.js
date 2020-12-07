const express = require('express');
const route = express.Router();
const productVendorController = require('../controllers/productVendorController');

route.get('/products', productVendorController.getAllProducts);
route.get('/product/:id', productVendorController.getOneProduct);
route.post('/products', productVendorController.addProduct);
route.patch('/product/:id', productVendorController.updateProduct);
route.delete('/product/:id', productVendorController.deleteProduct);

module.exports = route;