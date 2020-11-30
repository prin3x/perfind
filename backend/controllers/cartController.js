const db = require('../models');
const { Op } = require("sequelize");

const getAllCarts = async (req, res) => {
  const searchString = req.query._search?.toLowerCase();
  try {
    const cart = await db.Cart.findAll({
      attributes: ['id', 'qty', 'product_id'],
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

const addCarts = async (req, res) => {
  const { qty } = req.body;
  const targetId = req.params.id;
  const getCart = await db.Cart.findOne({
    // where: { product_id: targetId },
    where: { product_id: targetId, user_id: req.user.id },
    include: [db.Product],
  });
  if (getCart) {
    const result = await getCart.increment('qty', { by: +qty });
    res.status(200).send(getCart);
  } else {
    const cartProduct = await db.Cart.create({
      product_id: +getCart,
      user_id: req.user.id,
      qty: +qty,
    });
    res.status(200).send(cartProduct);
  }
  res.status(200).send(null);
};




const updateCarts = async (req, res) => {
  const targetId = req.params.id;
  const { qty } = req.body;
  const targetCart = await db.Cart.findOne({
    where: { product_id: targetId, user_id: req.user.id },
    include: [db.Product],
  });
  if (targetCart) {
    await targetCart.update({ qty });
    res.status(200).send({ messages: "update is success" });
  }
};

const deleteCarts = async (req, res) => {
  const targetId = req.params.id;
  const targetCart = await db.Cart.findOne({
    where: { product_id: targetId, user_id: req.user.id },
    include: [db.Product],
  });
  await targetCart.destroy();
  res.status(204).send();
};


module.exports = {
  getAllCarts,
  addCarts,
  updateCarts,
  deleteCarts
};