//* import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//* import our database connection from config.js
const sequelize = require('../config/connection.js');
//* Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}
//* set up fields and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tag_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
//* exports tag model
module.exports = Tag;
