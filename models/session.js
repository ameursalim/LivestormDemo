// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Session = sequelize.define('session', {
    sessionTime: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'Session',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Session.associate = (models) => {
    Session.belongsTo(models.user, {
      foreignKey: {
        name: 'userIdKey',
        field: 'UserId',
      },
      as: 'user',
    });
    Session.belongsTo(models.company, {
      foreignKey: {
        name: 'companyIdKey',
        field: 'companyId',
      },
      as: 'company',
    });
    Session.belongsTo(models.device, {
      foreignKey: {
        name: 'deviceIdKey',
        field: 'deviceId',
      },
      as: 'device',
    });
    Session.belongsTo(models.show, {
      foreignKey: {
        name: 'showIdKey',
        field: 'showId',
      },
      as: 'show',
    });
  };

  return Session;
};
