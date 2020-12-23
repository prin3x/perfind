module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Review",
    {
      rating: {
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "reviews",
    }
  );

  model.associate = models => {
    model.belongsTo(models.Product, {foreignKey: 'product_id'});
    model.belongsTo(models.User, {foreignKey: 'user_id'});
  };
  return model;
};
