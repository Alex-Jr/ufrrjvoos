const express = require('express');
const consultas_companhias = require('../controller/consultas_companhias');
const router = express.Router();

router.get('/', consultas_companhias.list)

router.get('/4', consultas_companhias.consulta4)

router.get('/8/form', consultas_companhias.consulta8_form)

router.get('/8', consultas_companhias.consulta8)

router.get('/83', consultas_companhias.consulta83)

module.exports = router;