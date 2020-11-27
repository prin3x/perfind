module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Vendor",
    {
      username: {
        type: DataTypes.STRING(255),
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
      },
      brand: {
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: "vendors",
    }
  );

  model.associate = (models) => {
    model.hasMany(models.Product, { foreignKey: "vendor_id" });
  };

  return model;
};
