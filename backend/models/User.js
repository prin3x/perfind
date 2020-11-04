module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fname: {
        type: DataTypes.STRING(255),
      },
      lname: {
        type: DataTypes.STRING(255),
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'lgbtq'),
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING(255),
      },
      default_shipping_address: {
        type: DataTypes.STRING(255),
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: 'users',
    }
  );

  model.associate = models => {
    model.hasMany(models.Payment_Method, {foreignKey: 'user_id'});
    model.hasMany(models.Address, {foreignKey: 'user_id'});
    model.hasOne(models.Cart, {foreignKey: 'user_id'});
    model.hasOne(models.Product, {foreignKey: 'user_id'});
  };

  return model;
};
