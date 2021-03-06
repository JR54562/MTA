'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.User, {
        foreignKey:'userId'
      });
      
    }
  };
  Song.init({
    name: DataTypes.STRING,
    album: DataTypes.STRING,
    year: DataTypes.STRING,
    length: DataTypes.STRING,
    genre: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    artist: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};