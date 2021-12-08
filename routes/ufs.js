/**
 * lida com rotas de ufs
 */
const express = require('express');
const uf = require('../controller/ufs');
const router = express.Router();

router.get('/', uf.get_list)

router.get('/new', uf.get_create), 

router.get('/:cod/edit', uf.get_update)

router.post('/', uf.create);

router.patch('/:cod', uf.update);

router.delete('/:cod', uf.remove);

module.exports = router;