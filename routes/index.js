const fs = require('fs');
const express = require('express');
const path = require('path');
const basename = path.basename(__filename);

const router = {
  '/': express.Router().get('/', (req, res) => {
    const routes = ['realizar reserva', 'equipamentos', 'aeronaves', 'companhias aereas', 'voos', 'passageiros',
    'paises', 'rotas voos', 'reservas', 'aeroportos', 'ufs', 'consultas companhias',
    'consultas equipamentos', 'consultas clientes', 'consultas voos', 'consultas rotas voos'];
  
    res.render('index', { routes });
  })
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const route = require(path.join(__dirname, file));
    router[file.slice(0, -3)] = route;
  });

module.exports = router