const express = require('express');
const passageiros = require('../controller/passageiros');
const router = express.Router();

router.get('/', passageiros.get_list)

router.get('/new', passageiros.get_create), 

router.get('/:cod/edit', passageiros.get_update)

router.post('/', passageiros.create);

router.patch('/:cod', passageiros.update);

router.delete('/:cod', passageiros.remove);

module.exports = router;