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
      Song.belongsToMany(models.User, {
        through:"UserSongs",
        foreignKey: "songId",
        otherKey:"userId"
      });
    }
  };
  Song.init({
    name: DataTypes.STRING,
    album: DataTypes.STRING,
    year: DataTypes.INTEGER,
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