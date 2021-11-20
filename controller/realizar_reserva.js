const { fn, col } = require('sequelize')
const { ITR_VOO, ITR_ROTA_VOO, ITR_ARPT, ITR_PSGR, ITR_PAIS, ITR_RESV } = require('../models'); 

async function step1(req, res) {
  const aeroportos = await ITR_ARPT.findAll({
    attributes: [
      [fn('DISTINCT', col('NM_CIDD')), 'NM_CIDD'],
      'CD_ARPT'
    ],
    order: [['NM_CIDD', 'asc']]
  })

  res.render('realizar_reserva_step1', { aeroportos });
}

async function step2(req, res) {
  const voos = await ITR_VOO.findAll({
    include: [{
      model: ITR_ROTA_VOO,
      include: [{
        model: ITR_ARPT,
        as: 'ITR_ARPT_ORIG'
      }, {
        model: ITR_ARPT,
        as: 'ITR_ARPT_DEST'
      }]
    }]
  })

  const ORIG = req.query.CD_ARPT_ORIG
  const DEST = req.query.CD_ARPT_DEST

  const filtrado = voos.filter((voo) => {
    return (
      (ORIG == 'NULL' || (voo.ITR_ROTA_VOO.CD_ARPT_ORIG === ORIG)) && (DEST == 'NULL' || (voo.ITR_ROTA_VOO.CD_ARPT_DEST === DEST))
    )
  })

  res.render('realizar_reserva_step2', { voos: filtrado });
}

async function step3(req, res) {
  const voo = await ITR_VOO.findOne({
    include: [{
      model: ITR_ROTA_VOO
    }],
    where: {
      NR_VOO: req.query.NR_VOO,
      DT_SAIDA_VOO: req.query.DT_SAIDA_VOO
    }
  })
  const paises = await ITR_PAIS.findAll()
  const passageiros = await ITR_PSGR.findAll()

  res.render('realizar_reserva_step3', { passageiros, paises, voo });
}

async function step4(req, res) {
  await ITR_RESV.create({
    CD_PSGR: req.body.CD_PSGR,
    NR_VOO: req.body.NR_VOO,
    DT_SAIDA_VOO: req.body.DT_SAIDA_VOO,
    PC_DESC_PASG: req.body.PC_DESC_PASG
  })

  res.status(200).send()
}


async function passageiros(req, res) {
  const passageiro = await ITR_PSGR.findOne({
    where: {
      NM_PSGR: req.query.NM_PSGR
    }
  })

  res.json(passageiro);
}

module.exports = {
  step1,
  step2,
  step3,
  step4,
  passageiros
}