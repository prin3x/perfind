module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Cart",
    {
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "carts",
    }
  );

  model.associate = (models) => {
    model.belongsTo(models.Product, { foreignKey: "product_id" });
    model.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return model;
};
