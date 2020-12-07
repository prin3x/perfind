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

const getSimilarProduct = async (req, res) => {
  const {
    topscent,
    secondscent,
    thirdscent,
    style1,
    style2,
    style3,
    style4,
    gender,
    season,
    daynight,
    longevity,
    sillage,
  } = await db.Product.findOne({ where: { id: req.params.id } });
  const rawQuery = `
  
  SELECT result.id, result.name, result.price, result.main_image, result.total_1 + result.total_2 + result.total_3 + result.total_4 + result.total_5 + result.total_6 + result.total_7 + result.total_8 + result.total_9 + result.total_10 + result.total_11 + result.total_12 + result.total_13 + result.total_14 + result.total_15 + result.total_16 + result.total_17 as total
FROM
( SELECT *,
CASE WHEN topscent LIKE "${topscent}" THEN '500'  
ELSE '0' END as total_1,
CASE WHEN secondscent LIKE "${topscent}" THEN '300'
ELSE '0' END AS total_2,
CASE WHEN thirdscent LIKE "${topscent}" THEN '200'
ELSE '0' END AS total_3,
CASE WHEN topscent LIKE "${secondscent}" THEN '250'  
ELSE '0' END as total_4,
CASE WHEN secondscent LIKE "${secondscent}" THEN '150'
ELSE '0' END AS total_5,
CASE WHEN thirdscent LIKE "${secondscent}" THEN '100'
ELSE '0' END AS total_6,
CASE WHEN topscent LIKE "${thirdscent}" THEN '250'  
ELSE '0' END as total_7,
CASE WHEN secondscent LIKE "${thirdscent}" THEN '150'
ELSE '0' END AS total_8,
CASE WHEN thirdscent LIKE "${thirdscent}" THEN '100'
ELSE '0' END AS total_9,
CASE WHEN style1 LIKE "${style1}" THEN '200'
ELSE '0' END AS total_10,
CASE WHEN style2 LIKE "${style2}" THEN '200'
ELSE '0' END AS total_11,
CASE WHEN style3 LIKE "${style3}" THEN '200'
ELSE '0' END AS total_12,
CASE WHEN style4 LIKE "${style4}" THEN '200'
ELSE '0' END AS total_13,
CASE WHEN season LIKE "${season}" THEN '200'
ELSE '0' END AS total_14,
CASE WHEN daynight LIKE "${daynight}" THEN '200'
ELSE '0' END AS total_15,
CASE WHEN longevity = "${longevity}" THEN '100'
ELSE '0' END AS total_16,
CASE WHEN sillage = "${sillage}" THEN '100'
ELSE '0' END AS total_17


FROM products
WHERE gender = "${gender}" AND size = '50' ) AS result

order by total desc
limit 10`;
  try {
    const [similarProduct, meta] = await db.sequelize.query(rawQuery);

    res.status(200).send(similarProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "something wrong" });
  }
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
  getSimilarProduct,
};
