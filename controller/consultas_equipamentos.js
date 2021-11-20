const { ITR_EQPT } = require('../models')
const { Op, fn, col } = require('sequelize');

async function list(req, res) {
  const consultas = [
    {
      id: 38,
      nome: 'Equipamentos por tipo e quantidade de passageiros',
      tem_filtro: true
    },
    {
      id: 40,
      nome: 'Equipamentos por nome',
    },
  ]
  res.render('consultas', { consultas, destino: 'consultas_equipamentos' });
}

async function consulta38_form(req, res) {
  const equipamentos = await  ITR_EQPT.findAll({
    attributes: [
      [fn('DISTINCT', col('DC_TIPO_EQPT')), 'DC_TIPO_EQPT']
    ],
    order: [['DC_TIPO_EQPT', 'asc']]
  })

  res.render('consulta38_form', { equipamentos })
}

async function consulta38(req, res) {
  const equipamentos = await ITR_EQPT.findAll({
    where: {
      QT_PSGR: {
        [Op[req.query.CD_OPERADOR]]: req.query.QT_PSGR
      },
      DC_TIPO_EQPT: {
        [Op[req.query.NAO_INCLUIR ? 'ne': 'eq']]: req.query.DC_TIPO_EQPT
      }
    }
  })

  res.render('consulta38', { equipamentos })
}

async function consulta40(req, res) {
  const equipamentos = await ITR_EQPT.findAll()

  res.render('consulta40', { 
    equipamentos: equipamentos.map(eqpt => ({
      CD_EQPT: eqpt.CD_EQPT,
      NM_EQPT: eqpt.NM_EQPT,
      QT_MOTOR: (Number.parseInt(eqpt.QT_MOTOR, 10) + (eqpt.NM_EQPT.includes('DOUGLAS') ? 1 : 0)),
      DC_TIPO_EQPT: eqpt.DC_TIPO_EQPT 
    }))
  })
}

module.exports = {
  list,
  consulta38,
  consulta38_form,
  consulta40
}