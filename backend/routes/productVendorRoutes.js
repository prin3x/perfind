const express = require('express');
const route = express.Router();
const productVendorController = require('../controllers/productVendorController');

route.get('/vendor/products', productVendorController.getAllProducts);
route.get('/vendor/product:id', productVendorController.getOneProduct);
route.post('/vendor/products', productVendorController, addProduct);
route.patch('/vendor/product:id', productVendorController, updateProduct);
route.delete('/vendor/product:id', productVendorController.deleteProduct);

module.exports = route;