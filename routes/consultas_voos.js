const express = require('express');
const consultas_voos = require('../controller/consultas_voos');
const router = express.Router();

router.get('/', consultas_voos.list)

router.get('/5/form', consultas_voos.consulta5_form)

router.get('/5', consultas_voos.consulta5)

router.get('/69/form', consultas_voos.consulta69_form)

router.get('/69', consultas_voos.consulta69)


module.exports = router;