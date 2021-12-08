/**
 * Definição do modelo equipamento no sequelize
 */
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
    NM_EQPT: {
      type: DataTypes.STRING
    },
    DC_TIPO_EQPT: {
      type: DataTypes.STRING
    },
    QT_MOTOR: {
      type: DataTypes.DECIMAL(1, 0)
    },
    IC_TIPO_PRPS: {
      type: DataTypes.STRING
    },
    QT_PSGR: {
      type: DataTypes.DECIMAL(3, 0)
    },
  }, {
    sequelize,
    modelName: 'ITR_EQPT',
    tableName: 'ITR_EQPT',
    timestamps: false,
  });
  return ITR_EQPT;
};