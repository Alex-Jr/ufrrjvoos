/**
 * "list" = retorna uma lista com as consultas disponíveis
 * "consultaXX" = retorna uma lista com o resultado da consulta
 * "consultaXX_form" retorna um formulário com os filtros disponíveis
 */
const { ITR_PSGR } = require('../models')
const { Op } = require('sequelize');
const calcularIdade = require('../utils/calcularIdade');

async function list(req, res) {
  const consultas = [
    {
      id: 71,
      nome: 'Clientes por estado civil'
    },
    {
      id: 87,
      nome: 'Clientes solteiros maior que a média',
    },
  ]

  res.render('consultas', { consultas, destino: 'consultas_clientes' });
}


async function consulta71(req, res) {
  const clientes_solteiros = await ITR_PSGR.findAll({
    where: {
      IC_ESTD_CIVIL: {
        [Op.eq]: 'S'
      }
    },
    order: [['NM_PSGR', 'asc']]
  });

  const clientes_outros = await ITR_PSGR.findAll({
    where: {
      IC_ESTD_CIVIL: {
        [Op.ne]: 'S'
      }
    },
    order: [['NM_PSGR', 'asc']]
  });

  res.render('consulta71', { 
    clientes_outros,
    clientes_solteiros: clientes_solteiros.map(cs => ({
      NM_PSGR: cs.NM_PSGR,
      DT_NASC_PSGR: calcularIdade(cs.DT_NASC_PSGR)
    }))
  });
}

async function consulta87(req, res) {
  // isso poderia ter sido feito por sql
  const clientes_solteiros = await ITR_PSGR.findAll({
    where: {
      IC_ESTD_CIVIL: 'S'
    }
  });

  let media = 0;

  clientes_solteiros.forEach((cs) => media += calcularIdade(cs.DT_NASC_PSGR))

  media = media / clientes_solteiros.length

  res.render('consulta87', { 
    clientes: clientes_solteiros.filter((cs) => calcularIdade(cs.DT_NASC_PSGR) > media),
  });
}


module.exports = {
  list,
  consulta71,
  consulta87
}