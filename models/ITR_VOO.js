'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ITR_VOO extends Model {
    static associate(models) {
      ITR_VOO.belongsTo(models.ITR_ARNV, {
        foreignKey: 'CD_ARNV'
      });

      // ITR_VOO.hasMany(models.ITR_RESV, {
      //   foreignKey: 'NR_VOO'
      // });

      ITR_VOO.belongsTo(models.ITR_ROTA_VOO, {
        foreignKey: 'NR_ROTA_VOO'
      })
    }
  };
  ITR_VOO.init({
    NR_VOO: {
      primaryKey: true,
      type: DataTypes.DECIMAL(3, 0)
    },
    DT_SAIDA_VOO: {
      type: DataTypes.DATEONLY,
      primaryKey: true
    },
    NR_ROTA_VOO: {
      type: DataTypes.DECIMAL(3, 0),
      references: 'ITR_ROTA_VOO'
    },
    CD_ARNV: {
      type: DataTypes.STRING,
      references: 'ITR_ARNV'
    },
  }, {
    sequelize,
    modelName: 'ITR_VOO',
    tableName: 'ITR_VOO',
    timestamps: false,
  });

  return ITR_VOO;
};