const db = require('../models');
const { Op } = require("sequelize");
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const getAllProducts = async (req, res) => {
  const searchString = req.query._search?.toLowerCase();
  try {
    const product = await db.Product.findAll({
      where: searchString
        ? {
          [Op.or]: [
            db.sequelize.where(
              db.sequelize.fn("lower", db.sequelize.col("name")),
              "LIKE",
              `%${searchString}%`
            ),
          ],
        }
        : null,
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getOneProduct = async (req, res) => {
  const getProduct = await db.Product.findOne({
    where: { id: req.params.id }
  });
  res.status(200).send(getProduct);
};

// const addProduct = async (req, res) => {
//   const newProduct = await db.Product.create({
//     ...req.body
//   });
//   res.status(201).send(newProduct);
// };

const addProduct = async (req, res) => {
  console.log(req.file);
  const file = req.file;
  console.log(req.body);

  cloudinary.uploader.upload(file.path, async (error, result) => {
    console.log(result);
    const newProduct = await db.Product.create({
      ...req.body,
      main_image: result.secure_url,
      publicId: result.public_id
    });

    fs.unlinkSync(file.path);
    res.status(201).send(newProduct);
  });

};

// const updateProduct = async (req, res) => {
//   const targetId = req.params.id;
//   await db.Product.update({
//     ...req.body
//   }, {
//     where: { id: targetId }
//   });
//   res.status(200).send({ message: "updating is success" });
// };

const updateProduct = async (req, res) => {
  const targetId = req.params.id;
  console.log(targetId);
  const file = req.file;
  const targetProduct = await db.Product.findOne({
    where: { id: targetId },
  });

  if (file) {
    cloudinary.uploader.destroy(targetProduct.publicId, async (err, result) => {
      console.log(result);
    });

    cloudinary.uploader.upload(file.path, async (err, result) => {
      await db.Product.update({
        ...req.body,
        main_image: result.secure_url,
        publicId: result.public_id
      }, {
        where: { id: targetId }
      });
    });
    res.status(200).send({ message: "updating is success" });
  } else {
    console.log('aaaaa', req.body);
    targetProduct.update({ ...req.body });
  }
  res.status(200).send({ message: "update" });
};



const deleteProduct = async (req, res) => {
  const targetId = req.params.id;
  await db.Product.destroy({
    where: { id: targetId }
  });
  res.status(204).send({ message: "success" });
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct
};