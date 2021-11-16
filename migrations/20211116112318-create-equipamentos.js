// TODO: Converter SQL SCRIPT para migrations
// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Equipamentos', {
//       cod_eqpt: {
//         primaryKey: true,
//         type: Sequelize.STRING
//       },
//       NM_EQPT: {
//         type: Sequelize.STRING
//       },
//       DC_TIPO_EQPT: {
//         type: Sequelize.STRING
//       },
//       QT_MOTOR: {
//         type: Sequelize.INTEGER
//       },
//       IC_TIPO_PRPS: {
//         type: Sequelize.STRING
//       },
//       QT_PSGR: {
//         type: Sequelize.INTEGER
//       },
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Equipamentos');
//   }
// };