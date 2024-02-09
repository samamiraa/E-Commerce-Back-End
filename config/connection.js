//* imports environmental variables
require('dotenv').config();

//* imports sequalize
const Sequelize = require('sequelize');

//* if stmt to use URL otherwise use environmental variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

//* exports sequalize
module.exports = sequelize;
