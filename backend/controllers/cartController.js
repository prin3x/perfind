const db = require('../models');
const { Op } = require("sequelize");

const getAllCarts = async (req, res) => {
  const searchString = req.query._search?.toLowerCase();
  try {
    const cart = await db.Cart.findAll({
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
    res.status(200).send(cart);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getOneCart = async (req, res) => {
  const getCart = await db.Cart.findOne({
    where: { id: req.params.id }
  });
  res.status(200).send(getCart);
};


const addCarts = async (req, res) => {
  const newCart = await db.Cart.create({
    ...req.body
  });
  res.status(201).send(newCart);
};

const updateCarts = async (req, res) => {
  const targetId = req.params.id;
  await db.Cart.update({
    ...req.body
  }, {
    where: { id: targetId }
  });
  res.status(200).send({ messages: "update is success" });
};

const deleteCarts = async (req, res) => {
  const targetId = req.params.id;
  await db.Cart.destroy({
    where: { id: targetId }
  });
  res.status(204).send();
};


module.exports = {
  getAllCarts,
  getOneCart,
  addCarts,
  updateCarts,
  deleteCarts
};