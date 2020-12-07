
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Order_Detail",
    {
      qty: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
      },

    },
    {
      tableName: "order_details",
    }
  );

  model.associate = models => {
    model.belongsTo(models.Order, { foreignKey: 'order_id' });
    model.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return model;
};
