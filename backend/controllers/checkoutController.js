const db = require('../models');


const getCheckout = async (req, res) => {
  const checkoutProduct = await db.Order.findAll({
    where: { user_id: req.user.id },
    include: [db.Order_Detail],
  });
  res.status(200).send(checkoutProduct);
};

const addCheckout = async (req, res) => {
  try {
    const { totalPrice } = req.body;
    const checkoutUser = await db.User.findOne({
      where: { id: req.user.id }
    });
    if (checkoutUser) {
      const addCheckoutProduct = await db.Order.create({
        user_id: req.user.id,
        total_price: totalPrice
      });
      res.status(200).send(addCheckoutProduct);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


const updateCheckout = async (req, res) => {
  try {
    const { status } = req.body;
    const checkoutUser = await db.Order.findOne({
      where: { user_id: req.user.id }
    });
    if (checkoutUser) {
      await db.Order.update({
        user_id: req.user.id,
        status: status
      });
    }

    res.status(200).send({ messages: "update" });
  } catch (err) {
    console.log(err);
  }
};




module.exports = {
  getCheckout,
  addCheckout,
  updateCheckout
};