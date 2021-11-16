// TODO: Converter SQL SCRIPT para migrations
// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Equipamentos', {
//       cod_eqpt: {
//         primaryKey: true,
//         type: Sequelize.STRING
//       },
//       nm_eqpt: {
//         type: Sequelize.STRING
//       },
//       dc_tipo_eqpt: {
//         type: Sequelize.STRING
//       },
//       qt_motor: {
//         type: Sequelize.INTEGER
//       },
//       ic_tipo_prps: {
//         type: Sequelize.STRING
//       },
//       qt_psgr: {
//         type: Sequelize.INTEGER
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Equipamentos');
//   }
// };