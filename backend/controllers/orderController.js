const db = require("../models");

exports.addSuccessOrder = async (req, res) => {
  const { total_price } = req.body;
  try {
    const targetOrder = await db.Order.create({
      total_price,
      status: "success",
    });
    res.status(200).send(targetOrder);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "your input has something wrong" });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const data = await db.Order.findAll({
      where: { user_id: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "fail bro" });
  }
};
