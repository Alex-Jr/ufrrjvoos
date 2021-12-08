/**
 * "list" = retorna uma lista com as consultas disponíveis
 * "consultaXX" = retorna uma lista com o resultado da consulta
 * "consultaXX_form" retorna um formulário com os filtros disponíveis
 */
const { ITR_CMPN_AEREA, ITR_PAIS, ITR_ARNV, ITR_EQPT } = require('../models')
const Op = require('sequelize').Op;

async function list(req, res) {
  const consultas = [
    {
      id: 4,
      nome: 'Companhias Estrangeiras'
    },
    {
      id: 8,
      nome: 'Companhias em um país',
      tem_filtro: true
    },
    {
      id: 83,
      nome: 'Companhias, capacidade de transportes da aeronaves por pais',
    }
  ]
  res.render('consultas', { consultas, destino: 'consultas_companhias' });
}


async function consulta4(req, res) {
  const companhias_aereas = await ITR_CMPN_AEREA.findAll({
    where: {
      CD_PAIS: {
        [Op.ne]: 'BR'
      }
    }
  })

  res.render('consulta4', { companhias_aereas })
}

async function consulta8_form(req, res) {
  const paises = await ITR_PAIS.findAll()

  res.render('consulta8_form', { paises })
}

async function consulta8(req, res) {
  const CD_PAIS = req.query.CD_PAIS;
  const companhias_aereas = await ITR_CMPN_AEREA.findAll({
    where: {
      CD_PAIS: CD_PAIS === 'null' ? null : CD_PAIS
    }
  })

  res.render('consulta8', { companhias_aereas })
}

async function consulta83(req, res) {
  const companhias_aereas = await ITR_CMPN_AEREA.findAll({
    include: [{
      model: ITR_ARNV,
      include: [{
        model: ITR_EQPT
      }]
    }]
  })

  console.log(companhias_aereas);

  res.render('consulta83', { companhias_aereas })
}

module.exports = {
  list,
  consulta4,
  consulta8_form,
  consulta8,
  consulta83
}