const express = require('express');
const rotas_voos = require('../controller/rotas_voos');
const router = express.Router();

router.get('/', rotas_voos.get_list)

router.get('/new', rotas_voos.get_create), 

router.get('/:cod/edit', rotas_voos.get_update)

router.post('/', rotas_voos.create);

router.patch('/:cod', rotas_voos.update);

router.delete('/:cod', rotas_voos.remove);

module.exports = router;