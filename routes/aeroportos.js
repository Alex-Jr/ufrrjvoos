/**
 * lida com rotas de aeroportos
 */
const express = require('express');
const aeroportos = require('../controller/aeroportos');
const router = express.Router();

router.get('/', aeroportos.get_list)

router.get('/new', aeroportos.get_create), 

router.get('/:cod/edit', aeroportos.get_update)

router.post('/', aeroportos.create);

router.patch('/:cod', aeroportos.update);

router.delete('/:cod', aeroportos.remove);

module.exports = router;