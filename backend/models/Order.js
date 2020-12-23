module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Order",
    {
      total_price: {
        type: DataTypes.INTEGER,
      },

      status: {
        type: DataTypes.STRING,

      },
    },
    {
      tableName: "orders",
    }
  );

  model.associate = models => {
    model.belongsTo(models.User, { foreignKey: 'user_id' });
    model.hasMany(models.Order_Detail, { foreignKey: 'order_id' });
  };
  return model;
};
