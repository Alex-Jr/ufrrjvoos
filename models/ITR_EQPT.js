'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_EQPT extends Model {
    static associate(models) {
      ITR_EQPT.hasMany(models.ITR_ARNV, {
        foreignKey: 'CD_EQPT'
      })
    }
  };
  ITR_EQPT.init({
    CD_EQPT: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    NM_EQPT: DataTypes.STRING,
    DC_TIPO_EQPT: DataTypes.STRING,
    QT_MOTOR: DataTypes.NUMBER,
    IC_TIPO_PRPS: DataTypes.STRING,
    QT_PSGR: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'ITR_EQPT',
    tableName: 'ITR_EQPT',
    timestamps: false,
  });
  return ITR_EQPT;
};