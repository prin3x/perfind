module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Address',
    {
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: 'addresses',
      timestamps: false,
    }
  );

  model.associate = models => {
    model.belongsTo(models.User, {foreignKey: 'user_id'});
  };

  return model;
};
