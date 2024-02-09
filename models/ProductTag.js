//* import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//* import our database connection from config.js
const sequelize = require('../config/connection');
//* Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

//* set up fields and rules for ProductTag model
ProductTag.init(
  {
    product_tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
//* exports producttag model
module.exports = ProductTag;
