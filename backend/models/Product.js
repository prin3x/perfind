module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Product',
    {
      sku: {
        type: DataTypes.STRING(255),
      },
      name: {
        type: DataTypes.STRING(255),
      },
      gender: {
        type:DataTypes.ENUM('male', 'female', 'unisex')
      },
      size: {
        type: DataTypes.ENUM(30,50,75,90,100)
      },
      image: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.STRING(255),
      },
      brand: {
        type: DataTypes.STRING(255),
      },
      category: {
        type: DataTypes.STRING(255),
      },
      price: {
        type: DataTypes.INTEGER,
      },
      countInStock: {
        type: DataTypes.INTEGER,
      },
      totalRating: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'products',
      timestamps: false,
    }
  );

  model.associate = models => {
    model.belongsTo(models.User, {foreignKey: 'user_id'});
    model.hasMany(models.Order_Detail, {foreignKey: 'product_id'});
    model.belongsTo(models.Category, {foreignKey: 'category_id'});
    model.hasMany(models.Cart, {foreignKey: 'product_id'});
    model.belongsTo(models.Vendor, {foreignKey: 'vendor_id'});
  };

  return model;
};
