const db = require("../models/index");

const postReviews = async (req, res) => {
  const productID = req.params.id;
  const { comment, rating } = req.body;
  await db.Review.create({
    product_id: productID,
    comment,
    rating: Number(rating),
  });
  res.status(201).send({ message: "Review Success!" });
};

const getReviews = async (req, res) => {
  const productID = req.params.id;
  const readReview = await db.Review.findAll({
    where: { product_id: +productID },
  });
  res.status(200).send(readReview);
};


module.exports = { postReviews, getReviews };
