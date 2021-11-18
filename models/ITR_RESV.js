'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ITR_RESV extends Model {
    static associate(models) {
      ITR_RESV.belongsTo(models.ITR_PSGR, {
        foreignKey: 'CD_PSGR'
      });

      ITR_RESV.belongsTo(models.ITR_VOO, {
        foreignKey: 'NR_VOO'
      });

      ITR_RESV.belongsTo(models.ITR_PSGR, {
        foreignKey: 'DT_SAIDA_VOO'
      });
    }
  };
  ITR_RESV.init({
    CD_PSGR: {
      type: DataTypes.DECIMAL(3, 0),
      primaryKey: true,
      references: 'ITR_PSGR'
    },
    NR_VOO: {
      type: DataTypes.DECIMAL(3, 0),
      primaryKey: true,
      references: 'ITR_VOO'
    },
    DT_SAIDA_VOO: {
      type: DataTypes.DATEONLY,
      primaryKey: true,
      references: 'ITR_VOO'
    },
    PC_DESC_PASG: {
      type: DataTypes.DECIMAL(5, 2),
    },
  }, {
    sequelize,
    modelName: 'ITR_RESV',
    tableName: 'ITR_RESV',
    timestamps: false,
    hooks: {
      beforeValidate: (reserva) => {
        if(reserva.PC_DESC_PASG === '') reserva.PC_DESC_PASG= null;
      }
    }
  });

  return ITR_RESV;
};