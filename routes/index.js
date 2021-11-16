const fs = require('fs');
const express = require('express');
const path = require('path');
const basename = path.basename(__filename);

const router = {
  '/': express.Router().get('/', (req, res) => {
    const routes = ['equipamentos', 'aeronaves', 'companhias aereas', 'voos', 'passageiros',
    'paises', 'rotas de voos', 'reservas', 'aeroportos', 'uf', 'consultar companhias',
    'consultar equipamentos', 'consultar clientes', 'consultar voos', 'consultar rotas de voos'];
  
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