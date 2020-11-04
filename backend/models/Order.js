module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Order',
    {
      total_points: {
        type: DataTypes.INTEGER,
      },
      total_price: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING(255),
      },
      shipping_fees: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'orders',
    }
  );

  model.associate = models => {
    model.belongsTo(models.User, {foreignKey: 'user_id'});
    model.hasOne(models.Tracking_Number, {foreignKey: 'order_id'});
  };
  return model;
};
