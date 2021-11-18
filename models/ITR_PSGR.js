'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_PSGR extends Model {
    static associate(models) {
      ITR_PSGR.hasOne(models.ITR_PSGR, {
        foreignKey: 'CD_PSGR_RESP'
      });

      ITR_PSGR.belongsTo(models.ITR_PSGR, {
        foreignKey: 'CD_PAIS'
      });
    }
  };
  ITR_PSGR.init({
    CD_PSGR: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    NM_PSGR: {
      type: DataTypes.STRING,
    },
    IC_SEXO_PSGR: {
      type: DataTypes.STRING,
    },
    DT_NASC_PSGR: {
      type: DataTypes.DATEONLY,
    },
    CD_PAIS: {
      type: DataTypes.STRING,
      references: 'ITR_PAIS'
    },
    IC_ESTD_CIVIL: {
      type: DataTypes.STRING,
    },
    CD_PSGR_RESP: {
      type: DataTypes.STRING,
      references: 'ITR_PSGR'
    },
  }, {
    sequelize,
    modelName: 'ITR_PSGR',
    tableName: 'ITR_PSGR',
    timestamps: false,
    hooks: {
      beforeValidate: (psgr) => {
        if(psgr.CD_PSGR_RESP === '') psgr.CD_PSGR_RESP = null;
      }
    }
  });

  return ITR_PSGR;
};