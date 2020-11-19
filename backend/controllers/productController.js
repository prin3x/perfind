const db = require('../models');
const { Op } = require('sequelize');

const getAllProducts = async (req, res) => {
  const product = await db.Product.findAll();
  res.status(200).send(product);
};

const getOneProduct = async (req, res) => {
  const product = await db.Product.findOne({
    where: { id: req.params.id },
  });
  res.status(200).send(product);
};

const filterProduct = async (req, res) => {
  const { priceStart, priceStop, note1, note2, note3, brand } = req.body;
  const filteredProduct = await db.Product.findAll({
    where: {
      price: {
        [Op.between]: [priceStart, priceStop],
      },
      brand: {
        [Op.or]: brand,
      },
      note1: {
        [Op.or]: [note1, note2, note3],
      },
      note2: {
        [Op.or]: [note1, note2, note3],
      },
      note3: {
        [Op.or]: [note1, note2, note3],
      },
      style1: {
        [Op.or]: [style1, style2],
      },
      style2: {
        [Op.or]: [style3, style4],
      },
      style3: {
        [Op.or]: [style5, style6],
      },
      style4: {
        [Op.or]: [style7, style8],
      },
    },
  });
  res.status(200).send(filteredProduct);
};

const updateProduct = async (req, res) => {
  const targetId = Number(req.params.id);
  await db.Product.update(
    {
      ...req.body,
    },
    {
      where: { id: targetId },
    }
  );
  res.status(200).send({ message: 'updating is success' });
};

const deleteProduct = async (req, res) => {
  const targetId = Number(req.params.id);
  await db.Product.destroy({
    where: { id: targetId },
  });
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
