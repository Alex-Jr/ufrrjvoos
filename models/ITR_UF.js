'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_UF extends Model {
    static associate(models) {
      // ITR_UF.belongsTo(models.ITR_PAIS, {
      //   foreignKey: 'CD_PAIS'
      // });

    }
  };
  ITR_UF.init({
    SG_UF: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    NM_UF: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'ITR_UF',
    tableName: 'ITR_UF',
    timestamps: false,
  });
  return ITR_UF;
};