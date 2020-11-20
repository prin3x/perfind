const express = require('express')
const route = express.Router()
const venderProductController = require('../controllers/venderProductController')

route.get('/venderproducts', venderProductController.getAllProducts)
route.get('/venderproduct/:id',venderProductController.getOneProduct)
route.post('/vender/addproduct',venderProductController.addVenderProduct)
route.patch('/venderupdate/:id',venderProductController.updateVenderProduct)
route.delete('/venderdelete/:id',venderProductController.deleteVenderProduct)

module.exports = route;