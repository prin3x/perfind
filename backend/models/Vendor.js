module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Vendor',
    {
      brand: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      isCheif: {
        type: DataTypes.BOOLEAN(),
        defaultValue: 1,
      },
    },
    {
      tableName: 'vendors',
    }
  );

  model.associate = models => {
    model.hasMany(models.Product, {foreignKey: 'vendor_id'});
  };

  return model;
};
