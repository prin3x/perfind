const express = require('express');
const route = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multer/multer');

route.get('/', productController.getAllProducts);
route.get('/:id', productController.getOneProduct);
route.get("/find/:id", productController.getSimilarProduct);
route.post('/addproduct', productController.addProduct);
route.patch('/update/:id', productController.updateProduct);
route.delete('/delete/:id', productController.deleteProduct);


// route.post('/addproduct', upload.single('main_image'), productController.addProduct);
// route.patch('/:id', upload.single('main_image'), productController.updateProduct);


module.exports = route;