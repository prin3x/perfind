module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Tracking_Number',
    {
      tracking: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('UNSEND', 'SENT', 'RECEIVED'),
      },
      shipping_company: {
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'trackings',
    }
  );

  model.associate = models => {
    model.belongsTo(models.Order, {foreignKey: 'order_id'});
  };

  return model;
};
