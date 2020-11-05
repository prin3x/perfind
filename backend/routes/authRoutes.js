const route = require('express').Router();
const controller = require('../controllers/authController');

route.post('/register', controller.userRegister);
route.post('/login', controller.userLogin);

module.exports = route;
