const express = require('express');
const voos = require('../controller/voos');
const router = express.Router();

router.get('/', voos.get_list)

router.get('/new', voos.get_create), 

router.get('/:cod/edit', voos.get_update)

router.post('/', voos.create);

router.patch('/:cod', voos.update);

router.delete('/:cod', voos.remove);

module.exports = router;