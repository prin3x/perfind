const express = require('express');
const route = express.Router();
const vendorController = require('../controllers/vendorController');

route.get('/vendors', vendorController.getAllVendors);
route.get('/vendor:id', vendorController.getOneVendor);
route.post('/vendors', vendorController.addVendor);
route.patch('/vendor/:id', vendorController.updateVendor);
route.delete('/vendor/:id', vendorController.deleteVendor);

module.exports = route;