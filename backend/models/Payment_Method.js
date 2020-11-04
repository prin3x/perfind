module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Payment_Method',
    {
      payment_method: {
        type: DataTypes.ENUM('credit_card', 'paypal'),
      },
    },
    {
      tableName: 'payment_methods',
      timestamps: false,
    }
  );

  model.associate = models => {
    model.belongsTo(models.Payment_Method, {foreignKey: 'user_id'});
  };

  return model;
};
