const db = require("../models");
const uploadToCloudinary = require("../config/cloudinary/cloudinary");
const fs = require("fs");

const uploadSingleFile = async (req, res) => {
  console.log(req.file);
  const path = req.file.path;
  try {
    const image = await uploadToCloudinary(
      path,
      `${req.file.fieldname}/${req.file.filename}`
    );
    db.SubImage.create({ image_url: image.url });
    res.status(200).json(image.url);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
const uploadMultiFiles = async (req, res) => {
  const files = req.files;
  try {
    const urls = [];

    for (const images of files) {
      const { path, filename } = images;
      const newPath = await uploadToCloudinary(
        path,
        `ProductsImages/${filename}`
      );
      urls.push(newPath);
    }
    res.status(200).send({
      message: "image Uploaded Successfully",
      data: urls,
    });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = {
  uploadSingleFile,
};
