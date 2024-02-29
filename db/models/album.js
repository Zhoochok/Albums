'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({User, Photo}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.hasMany(Photo, {foreignKey: 'albumId'})
    }
  }
  Album.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    private: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    userId: {
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};