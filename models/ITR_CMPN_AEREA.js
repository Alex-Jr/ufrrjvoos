'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_CMPN_AEREA extends Model {
    static associate(models) {
    }
  };
  ITR_CMPN_AEREA.init({
    CD_CMPN_AEREA: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    NM_CMPN_AEREA: DataTypes.STRING,
    CD_PAIS: { 
      type: DataTypes.STRING,
      references: 'ITR_PAIS'
    }
  }, {
    sequelize,
    modelName: 'ITR_CMPN_AEREA',
    tableName: 'ITR_CMPN_AEREA',
    timestamps: false,
  });
  return ITR_CMPN_AEREA;
};