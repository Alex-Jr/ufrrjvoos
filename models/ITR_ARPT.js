/**
 * Definição do modelo aeroporto no sequelize
 */
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ITR_ARPT extends Model {
    static associate(models) {
      ITR_ARPT.belongsTo(models.ITR_UF, {
        foreignKey: 'SG_UF'
      });

    }
  };
  ITR_ARPT.init({
    CD_ARPT: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    CD_PAIS: {
      type: DataTypes.STRING,
    },
    SG_UF: {
      type: DataTypes. STRING,
      references: 'ITR_ARPT'
    },
    NM_CIDD: {
      type: DataTypes. STRING
    }
  }, {
    sequelize,
    modelName: 'ITR_ARPT',
    tableName: 'ITR_ARPT',
    timestamps: false,
  });
  return ITR_ARPT;
};