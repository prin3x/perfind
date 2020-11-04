module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Category',
    {
      category: {
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'categories',
      timestamps: false,
    }
  );

  model.associate = models => {
    model.hasMany(models.Product, {foreignKey: 'category_id'});
  };

  return model;
};
