const db = require('../models');
const { Op } = require("sequelize");

const getAllCarts = async (req, res) => {
  // const rawQuery = `
  //   SELECT c.id,c.user_id, c.qty, c.product_id, p.name, p.main_image
  //   FROM carts as c
  //   INNER JOIN products as p
  //   ON c.product_id = p.id
  //   WHERE c.user_id = ${req.user.id}
  // `;
  const cartProducts = await db.Cart.findAll({
    // attributes: ['id', 'qty', 'product_id'],
    where: { user_id: req.user.id },
    include: [
      {
        model: db.Product,
        require: true,
      },
    ],
  });

  // const [cartProducts, metadata] = await db.sequelize.query(rawQuery);


  res.status(200).send(cartProducts);
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
    await getCart.increment('qty', { by: +qty });
    res.status(200).send(getCart);
  } else {
    const cartProduct = await db.Cart.create({
      product_id: +targetId,
      user_id: req.user.id,
      qty: +qty,
    });
    res.status(200).send(cartProduct);
  }
  res.status(200).send(null);
};




const updateCarts = async (req, res) => {
  try {
    const targetId = req.params.id;
    const { qty } = req.body;
    console.log(qty);
    const targetCart = await db.Cart.findOne({
      // where: { product_id: targetId, user_id: req.user.id },
      where: { product_id: targetId },
      include: [db.Product],
    });
    if (targetCart) {
      await targetCart.update({ qty });
      res.status(200).send({ messages: "update is success" });
    }
  } catch (err) {
    console.log(err);
  }

};



const deleteCarts = async (req, res) => {
  const targetId = req.params.id;

  const targetCart = await db.Cart.findOne({
    where: { product_id: targetId, user_id: req.user.id },
    // where: { product_id: +targetId },
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