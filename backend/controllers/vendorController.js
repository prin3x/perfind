const db = require('../models');

const getAllVendors = async (req, res) => {
    const getVendors = await db.Vendor.findAll();
    res.status(200).send(getVendors);
};

const getOneVendor = async (req, res) => {
    const getVendor = await db.Vendor.findOne({
        where: { id: req.params.id }
    });
    res.status(200).send(getVendor);
};

const addVendor = async (req, res) => {
    const newVender = await db.Vendor.create({
        ...req.body
    });
    res.status(201).send(newVender);
};

const updateVendor = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.Vendor.update({
        ...req.body
    }, {
        where: { id: targetId }
    });
    res.status(200).send({ message: "updating is success" });
};

const deleteVendor = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.Vendor.destroy({
        where: { id: targetId }
    });
    res.status(204).send();
};



module.exports = {
    getAllVendors,
    getOneVendor,
    addVendor,
    updateVendor,
    deleteVendor
};