const express = require("express");
const route = express.Router();
const { uploadSingleFile } = require("../controllers/uploadController");
const upload = require("../config/multer/multer");

route.post("/", upload.single("UserProfile"), uploadSingleFile);
route.post(
  "/products_images",
  upload.single("ProductsImages"),
  uploadSingleFile
);
route.post("/brand_images", upload.single("BrandImages"), uploadSingleFile);

module.exports = route;
