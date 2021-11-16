'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_PAIS extends Model {
    static associate(models) {
      ITR_PAIS.hasMany(models.ITR_CMPN_AEREA, {
        foreignKey: 'CD_PAIS'
      })
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