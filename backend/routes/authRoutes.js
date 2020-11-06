const route = require('express').Router();
const passport = require('passport');
const controller = require('../controllers/authController');

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

route.post('/register', controller.userRegister);
route.post('/login', controller.userLogin);

route.get('/facebook', passport.authenticate('facebookToken'));
route.get(
  '/facebook/callback',
  passport.authenticate('facebookToken'),
  (req, res) => {
    console.log({userOUTSIDE: req.user.user});
    res.status(200).send({message: 'login successfully'});
  }
);

module.exports = route;
