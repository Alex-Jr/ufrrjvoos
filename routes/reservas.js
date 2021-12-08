/**
 * lida com rotas de reservas
 */
const express = require('express');
const reservas = require('../controller/reservas');
const router = express.Router();

router.get('/', reservas.get_list)

router.get('/new', reservas.get_create), 

router.get('/:cod/edit', reservas.get_update)

router.post('/', reservas.create);

router.patch('/:cod', reservas.update);

router.delete('/:cod', reservas.remove);

module.exports = router;