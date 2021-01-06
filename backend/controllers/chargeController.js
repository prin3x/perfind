const db = require("../models");

const omise = require("omise")({
  secretKey: process.env.OMISE_SECRET_KEY,
  omiseVersion: "2015-09-10",
});

const chargeControl = async (req, res) => {
  const tokenId = req.body.token;
  const amount = req.body.amount;
  console.log(amount);
  omise.charges.create(
    {
      description: tokenId,
      amount: amount,
      currency: "thb",
      capture: true,
      card: tokenId,
    },
    async function (err, resp) {
      if (err) {
        console.log(err);
        res.status(404).send(err);
      }
      await db.Cart.destroy({
        where: {
          user_id: req.user.id
        }
      });
      await db.Order.create({
        total_price: Number(amount),
        status: "success",
        user_id: req.user.id
      });
      res.status(200).send({
        id: resp.id,
        amount,
      });
    }
  );
};

module.exports = {
  chargeControl,
};
