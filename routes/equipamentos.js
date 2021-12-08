/**
 * lida com rotas de equipamento
 */
const express = require('express');
const equipamentos = require('../controller/equipamentos');
const router = express.Router();

router.get('/', equipamentos.get_list)

router.get('/new', equipamentos.get_create), 

router.get('/:cod/edit', equipamentos.get_update)

router.post('/', equipamentos.create);

router.patch('/:cod', equipamentos.update);

router.delete('/:cod', equipamentos.remove);

module.exports = router;