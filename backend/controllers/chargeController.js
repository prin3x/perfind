const omise = require("omise")({
  secretKey: process.env.OMISE_SECRET_KEY,
  omiseVersion: "2015-09-10",
});

const chargeControl = async (req, res) => {
  const tokenId = req.body.token;
  const amount = req.body.amount;
  omise.charges.create(
    {
      description: "Charge for order ID: 00001",
      amount: amount,
      currency: "thb",
      capture: true,
      card: tokenId,
    },
    function (err, resp) {
      if (err) {
        console.log(err);
        res.status(404).send(err);
      }
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
