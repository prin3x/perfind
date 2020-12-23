const express = require("express");
const route = express.Router();
const cartController = require("../controllers/cartController");
const passport = require("passport");
const { chargeControl } = require("../controllers/chargeController");

const authentication = passport.authenticate("jwt", { session: false });

route.post("/", authentication, chargeControl);

module.exports = route;
