const route = require('express').Router();

route.post('/register', controller.userRegister);
route.post('/login', controller.userLogin);

module.exports = route;
