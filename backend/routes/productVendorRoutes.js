const express = require('express');
const route = express.Router();
const productVendorController = require('../controllers/productVendorController');
const upload = require('../config/multer/multer');

route.get('/products', productVendorController.getAllProducts);
route.get('/product/:id', productVendorController.getOneProduct);
// route.post('/products', productVendorController.addProduct);
// route.patch('/product/:id', productVendorController.updateProduct);
route.delete('/product/:id', productVendorController.deleteProduct);


route.post('/products', upload.single('main_image'), productVendorController.addProduct);
route.patch('/products/:id', upload.single('main_image'), productVendorController.updateProduct);

module.exports = route;