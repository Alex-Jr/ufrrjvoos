'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITR_ROTA_VOO extends Model {
    static associate(models) {
      ITR_ROTA_VOO.belongsTo(models.ITR_ARPT, {
        foreignKey: 'CD_ARPT_ORIG',
        as : "ITR_ARPT_ORIG"
      });

      ITR_ROTA_VOO.belongsTo(models.ITR_ARPT, {
        foreignKey: 'CD_ARPT_DEST',
        as : "ITR_ARPT_DEST"
      });

      ITR_ROTA_VOO.hasMany(models.ITR_VOO, {
        foreignKey: 'NR_VOO'
      });
    }
  };
  ITR_ROTA_VOO.init({
    NR_ROTA_VOO: {
      primaryKey: true,
      type: DataTypes.DECIMAL(3, 0)
    },
    CD_ARPT_ORIG: {
      type: DataTypes.STRING,
      references: 'ITR_ARPT'
    },
    CD_ARPT_DEST: {
      type: DataTypes.STRING,
      references: 'ITR_ARPT'
    },
    VR_PASG: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'ITR_ROTA_VOO',
    tableName: 'ITR_ROTA_VOO',
    timestamps: false,
    hooks: {
      beforeValidate: (rota_voo) => {
        if(rota_voo.VR_PASG === '') rota_voo.VR_PASG= null;
      }
    }
  });

  return ITR_ROTA_VOO;
};