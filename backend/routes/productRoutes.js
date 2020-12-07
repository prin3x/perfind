const express = require('express');
const route = express.Router();
const productController = require('../controllers/productController');

route.get('/', productController.getAllProducts);
route.get('/:id', productController.getOneProduct);
route.get("/find/:id", productController.getSimilarProduct);
route.post('/addproduct', productController.addProduct);
route.patch('/update/:id', productController.updateProduct);
route.delete('/delete/:id', productController.deleteProduct);

module.exports = route;