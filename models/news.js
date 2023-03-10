'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relation Many to One
      News.hasOne(models.Category, {
        foreignKey: "CategoryId"
      })
    }
  }
  News.init({
    newsTitle: DataTypes.STRING,
    newsSummary: DataTypes.STRING,
    newsDetail: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    AuthorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};