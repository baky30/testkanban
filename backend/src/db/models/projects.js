const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const projects = sequelize.define(
    'projects',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
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

  projects.associate = (db) => {
    db.projects.belongsToMany(db.tickets, {
      as: 'tickets',
      foreignKey: {
        name: 'projects_ticketsId',
      },
      constraints: false,
      through: 'projectsTicketsTickets',
    });

    db.projects.belongsToMany(db.tickets, {
      as: 'tickets_filter',
      foreignKey: {
        name: 'projects_ticketsId',
      },
      constraints: false,
      through: 'projectsTicketsTickets',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.projects.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.projects.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return projects;
};
