const { ITR_VOO, ITR_RESV, ITR_ROTA_VOO, ITR_ARPT } = require('../models')
const { Op, fn, col } = require('sequelize');

async function list(req, res) {
  const consultas = [
    {
      id: 5,
      nome: 'Voos por cliente',
      tem_filtro: true
    },
    {
      id: 69,
      nome: 'Voos por cidade',
      tem_filtro: true
    }
  ]
  res.render('consultas', { consultas, destino: 'consultas_voos' });
}

async function consulta5_form(req, res) {
  res.render('consulta5_form')
}

async function consulta5(req, res) {
  const voos = await ITR_VOO.findAll({
    include: [{
      model: ITR_RESV,
      where: {
        CD_PSGR: {
          [Op[req.query.CD_OPERADOR]]: req.query.CD_PSGR
        }
      }
    }]
  })

  res.render('consulta5', { voos })
}

async function consulta69_form(req, res) {
  const aeroportos = await ITR_ARPT.findAll({
    attributes: [
      [fn('DISTINCT', col('NM_CIDD')), 'NM_CIDD']
    ],
    order: [['NM_CIDD', 'asc']]
  })

  res.render('consulta69_form', { cidades: aeroportos.map((arpt) => arpt.NM_CIDD), valor: null})
}

async function consulta69(req, res) {
  console.log (req.query.NM_CIDD_ORIG)

  const voos = await ITR_VOO.findAll({
    include: [{
      model: ITR_ROTA_VOO,
      include: [{
        model: ITR_ARPT,
        as : "ITR_ARPT_ORIG",
      }, {
        model: ITR_ARPT,
        as : "ITR_ARPT_DEST",
      }]
    }]
  })

  const ORIG = req.query.NM_CIDD_ORIG
  const DEST = req.query.NM_CIDD_DEST

  const filtrado = voos.filter((voo) => {
    return (
      (ORIG == 'NULL' || (voo.ITR_ROTA_VOO.ITR_ARPT_ORIG.NM_CIDD === ORIG)) && (DEST == 'NULL' || (voo.ITR_ROTA_VOO.ITR_ARPT_DEST.NM_CIDD === DEST))
    )
  })

  res.json({quantidade: filtrado.length })
}

module.exports = {
  list,
  consulta5_form,
  consulta5,
  consulta69_form,
  consulta69
}