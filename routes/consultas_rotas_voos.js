/**
 * lida com rotas de consultas de rota de voos
 */
const express = require('express');
const consultas_rotas_voos = require('../controller/consultas_rotas_voos');
const router = express.Router();

router.get('/', consultas_rotas_voos.list)

router.get('/88', consultas_rotas_voos.consulta88)

module.exports = router;