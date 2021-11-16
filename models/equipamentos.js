'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Equipamentos.init({
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
  return Equipamentos;
};