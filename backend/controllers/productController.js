const db = require("../models");
const { Op } = require("sequelize");

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
              { gender: { [Op.substring]: searchString } },
              { style1: { [Op.substring]: searchString } },
              { style2: { [Op.substring]: searchString } },
              { style3: { [Op.substring]: searchString } },
              { style4: { [Op.substring]: searchString } },
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
  const product = await db.Product.findOne({
    where: { id: req.params.id },
  });
  res.status(200).send(product);
};

const addProduct = async (req, res) => {
  const newProduct = await db.Product.create({
    ...req.body,
  });
  res.status(201).send(newProduct);
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
  res.status(200).send({ message: "updating is success" });
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
