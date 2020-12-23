const express = require("express");
const {
  addSuccessOrder,
  getMyOrders,
} = require("../controllers/orderController");
const route = express.Router();
const passport = require("passport");

const authentication = passport.authenticate("jwt", { session: false });

route.post("/", authentication, addSuccessOrder);

route.get("/", authentication, getMyOrders);




module.exports = route;
