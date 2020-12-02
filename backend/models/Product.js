module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Product",
    {
      sku: {
        type: DataTypes.STRING(255),
      },
      name: {
        type: DataTypes.STRING(255),
      },
      gender: {
        type: DataTypes.STRING(255),
      },
      size: {
        type: DataTypes.ENUM("30", "50", "75", "90", "100"),
      },
      daynight: {
        type: DataTypes.ENUM("day", "night"),
      },
      season: {
        type: DataTypes.STRING(255),
      },
      main_image: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.STRING(1000),
      },
      brand: {
        type: DataTypes.STRING(255),
      },
      style1: {
        type: DataTypes.STRING(255),
      },
      style2: {
        type: DataTypes.STRING(255),
      },
      style3: {
        type: DataTypes.STRING(255),
      },
      style4: {
        type: DataTypes.STRING(255),
      },
      topscent: {
        type: DataTypes.STRING(255),
      },
      secondscent: {
        type: DataTypes.STRING(255),
      },
      thirdscent: {
        type: DataTypes.STRING(255),
      },

      longevity: {
        type: DataTypes.INTEGER,
      },
      sillage: {
        type: DataTypes.INTEGER,
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
      // slug: {
      //   type: DataTypes.STRING,
      // }
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  model.associate = models => {
    model.belongsTo(models.User, { foreignKey: 'user_id' });
    model.hasMany(models.Order_Detail, { foreignKey: 'product_id' });
    model.belongsTo(models.Category, { foreignKey: 'category_id' });
    model.hasMany(models.Cart, { foreignKey: 'product_id' });
    model.belongsTo(models.Vendor, { foreignKey: 'vendor_id' });
  };

  return model;
};
