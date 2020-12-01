const express = require("express");
const route = express.Router();
const cartController = require("../controllers/cartController");
const passport = require("passport");
const { chargeControl } = require("../controllers/chargeController");

route.post("/", chargeControl);

module.exports = route;
