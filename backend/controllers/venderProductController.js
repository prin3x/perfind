const db = require('../models');

const getAllProducts = async (req, res) => {
    const product = await db.Vendor.findAll();
    res.status(200).send(product);
};

const getOneProduct = async (req, res) => {
    const product = await db.Vendor.findOne({
        where: { id: req.params.id }
    });
    res.status(200).send(product);
};

const addVenderProduct = async(req,res) => {
    const newVenderProduct = await db.Vendor.create({
        ...req.body
    });
    res.status(201).send(newVenderProduct);
};

const updateVenderProduct = async(req,res)=>{
    const targetId = Number(req.params.id);
    await db.Vendor.update({
        ...req.body
    }, {
        where: { id: targetId }
    });
    res.status(200).send({ message: "updating is success" });
};

const deleteVenderProduct = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.Vendor.destroy({
        where: { id: targetId }
    });
    res.status(204).send();
};



module.exports = {
    getAllProducts,
    getOneProduct,
    addVenderProduct,
    updateVenderProduct,
    deleteVenderProduct
}