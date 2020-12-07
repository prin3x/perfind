const express = require('express');
const route = express.Router();
const cartController = require('../controllers/cartController');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });
// {session: false} คือการที่กลับมาแล้วข้อมูลยังอยู้
// ต้องเป็นuserจึงจะสามารถทำงานได้

// route.get('/', cartController.getAllCarts);
// route.post('/:id', cartController.addCarts);
// route.delete('/:id', cartController.deleteCarts);
// route.patch('/:id', cartController.updateCarts);


route.get('/', authentication, cartController.getAllCarts);
route.post('/:id', authentication, cartController.addCarts);
route.delete('/:id', authentication, cartController.deleteCarts);

module.exports = route;