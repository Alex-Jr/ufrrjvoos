const { Sequelize } = require('sequelize');
const 

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  'ufrrjvoos',
  'manager',
  '123456789',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize