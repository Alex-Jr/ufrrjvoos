/**
 * lida com rotas de paises
 */
const express = require('express');
const paises = require('../controller/paises');
const router = express.Router();

router.get('/', paises.get_list)

router.get('/new', paises.get_create), 

router.get('/:cod/edit', paises.get_update)

router.post('/', paises.create);

router.patch('/:cod', paises.update);

router.delete('/:cod', paises.remove);

module.exports = router;