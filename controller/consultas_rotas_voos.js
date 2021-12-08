/**
 * "list" = retorna uma lista com as consultas disponíveis
 * "consultaXX" = retorna uma lista com o resultado da consulta
 * "consultaXX_form" retorna um formulário com os filtros disponíveis
 */
const { ITR_ROTA_VOO, ITR_VOO, ITR_RESV } = require('../models')
const { Op, fn, col } = require('sequelize');

async function list(req, res) {
  const consultas = [
    {
      id: 88,
      nome: 'Rotas sem reservas',
    },
  ]

  res.render('consultas', { consultas, destino: 'consultas_rotas_voos' });
}

async function consulta88(req, res) {
  const rotas_voos = await ITR_ROTA_VOO.findAll({
    include: [{
      model: ITR_VOO,
      include: [{
        model: ITR_RESV
      }]
    }]
  })

  // Queremos todos as rotas sem reservas para todos os seus voos
  const filtrado = rotas_voos.filter((rv) => {
    // Se após o filtro tver 0 elementos no array, quer dizer que esse todos os voos não possuem reservas.
    return (rv.ITR_VOOs.filter((voo) => {
      // Se tem uma reserva para resse voo, ele é desconsiderado
      return !(voo.ITR_RESVs && voo.ITR_RESVs.length > 0) // 
    })).length > 0 
  })

  res.render('consulta88', { 
    rotas_voos: filtrado
  });
}

module.exports = {
  list,
  consulta88
}