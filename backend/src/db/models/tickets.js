const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const tickets = sequelize.define(
    'tickets',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['ToDo', 'InProgress', 'Done'],
      },

      created_date: {
        type: DataTypes.DATE,
      },

      due_date: {
        type: DataTypes.DATE,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  tickets.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.tickets.belongsTo(db.users, {
      as: 'assigned_user',
      foreignKey: {
        name: 'assigned_userId',
      },
      constraints: false,
    });

    db.tickets.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.tickets.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return tickets;
};
