module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "SubImage",
    {
      image_url: {
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: "subimages",
    }
  );

  model.associate = (models) => {
    model.belongsTo(models.Product, { foreignKey: "product_id" });
    model.belongsTo(models.Vendor, { foreignKey: "vendor_id" });
  };
  return model;
};
