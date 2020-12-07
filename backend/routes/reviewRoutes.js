const express = require("express");
const route = express.Router();
const reviewController = require("../controllers/reviewController");

route.get("/:id", reviewController.getReviews);
route.post("/:id", reviewController.postReviews);

module.exports = route;
