'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_PAIS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ITR_PAIS.init({
    CD_PAIS: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    NM_PAIS: DataTypes.STRING,
    QT_PPLC_PAIS: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'ITR_PAIS',
    tableName: 'ITR_PAIS',
    timestamps: false,
  });
  return ITR_PAIS;
};