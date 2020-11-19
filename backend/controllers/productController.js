const db = require('../models');

const getAllProducts = async (req, res) => {
    const product = await db.Product.findAll();
    res.status(200).send(product);
};

const getOneProduct = async (req, res) => {
    const product = await db.Product.findOne({
        where: { id: req.params.id }
    });
    res.status(200).send(product);
};

const addProduct = async (req, res) => {
    const newProduct = await db.Product.create({
        ...req.body
    });
    res.status(201).send(newProduct);
};

const updateProduct = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.Product.update({
        ...req.body
    }, {
        where: { id: targetId }
    });
    res.status(200).send({ message: "updating is success" });
};

const deleteProduct = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.Product.destroy({
        where: { id: targetId }
    });
    res.status(204).send();
};

module.exports = {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
};