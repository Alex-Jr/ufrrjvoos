const express = require('express');
const aeronaves = require('../controller/aeronaves');
const router = express.Router();

router.get('/', aeronaves.get_list)

router.get('/new', aeronaves.get_create), 

router.get('/:cod/edit', aeronaves.get_update)

router.post('/', aeronaves.create);

router.patch('/:cod', aeronaves.update);

router.delete('/:cod', aeronaves.remove);

module.exports = router;