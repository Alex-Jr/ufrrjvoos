'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_ARNV extends Model {
    static associate(models) {
      ITR_ARNV.belongsTo(models.ITR_EQPT, {
        foreignKey: 'CD_EQPT'
      });

      ITR_ARNV.belongsTo(models.ITR_CMPN_AEREA, {
        foreignKey: 'CD_CMPN_AEREA'
      });
    }
  };
  ITR_ARNV.init({
    CD_ARNV: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    CD_EQPT: {
      type: DataTypes.STRING,
      references: 'ITR_EQPT'
    },
    CD_CMPN_AEREA: { 
      type: DataTypes.STRING,
      references: 'ITR_CMPN_AEREA'
    }
  }, {
    sequelize,
    modelName: 'ITR_ARNV',
    tableName: 'ITR_ARNV',
    timestamps: false,
  });
  return ITR_ARNV;
};