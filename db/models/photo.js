'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({Album}) {      
    this.belongsTo(Album, {foreignKey: 'albumId'})
    }
  }
  Photo.init({
    description: {
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    albumId: {
      allowNull: false,
      references: {
        model: 'Albums',
        key: 'id'
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};