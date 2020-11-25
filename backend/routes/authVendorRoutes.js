const express = require('express');
const route = express.Router();
const authVendorController = require('../controllers/authVendorController');

route.get('/vendors', authVendorController.getAllVendors);
route.get('/vendor:id', authVendorController.getOneVendor);
route.post('/vendors', authVendorController.addVendor);
route.patch('/vendor/:id', authVendorController.updateVendor);
route.delete('/vendor/:id', authVendorController.deleteVendor);

module.exports = route;