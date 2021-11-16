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
    cd_eqpt: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    nm_eqpt: DataTypes.STRING,
    dc_tipo_eqpt: DataTypes.STRING,
    qt_motor: DataTypes.NUMBER,
    ic_tipo_prps: DataTypes.STRING,
    qt_psgr: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'ITR_EQPT',
    tableName: 'ITR_EQPT',
    timestamps: false,
  });
  return Equipamentos;
};