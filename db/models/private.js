'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Private extends Model {
    static associate({User, Album}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Album, {foreignKey: 'albumId'})
    }
  }
  Private.init({
    userId: {
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
    },
    albumId: {
      allowNull: false,
      references: {
        model: "Albums",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Private',
  });
  return Private;
};