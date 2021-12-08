/**
 * lida com rotas de consultas de clientes
 */
const express = require('express');
const consultas_clientes = require('../controller/consultas_clientes');
const router = express.Router();

router.get('/', consultas_clientes.list)

router.get('/71', consultas_clientes.consulta71)

router.get('/87', consultas_clientes.consulta87)

// router.get('/40', consultas_clientes.consulta40)


module.exports = router;