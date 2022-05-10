// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Device = sequelize.define('device', {
    deviceType: {
      type: DataTypes.STRING,
      field: 'DeviceType',
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'Device',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Device.associate = (models) => {
    Device.hasMany(models.session, {
      foreignKey: {
        name: 'deviceIdKey',
        field: 'deviceId',
      },
      as: 'deviceSessions',
    });
  };

  return Device;
};