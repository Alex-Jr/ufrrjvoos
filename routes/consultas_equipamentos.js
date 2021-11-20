const express = require('express');
const consultas_equipamentos = require('../controller/consultas_equipamentos');
const router = express.Router();

router.get('/', consultas_equipamentos.list)

router.get('/38', consultas_equipamentos.consulta38)

router.get('/38/form', consultas_equipamentos.consulta38_form)

router.get('/40', consultas_equipamentos.consulta40)


module.exports = router;