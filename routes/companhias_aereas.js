const express = require('express');
const companhias_aereas = require('../controller/companhias_aereas');
const router = express.Router();

router.get('/', companhias_aereas.get_list)

router.get('/new', companhias_aereas.get_create), 

router.get('/:cod/edit', companhias_aereas.get_update)

router.post('/', companhias_aereas.create);

router.patch('/:cod', companhias_aereas.update);

router.delete('/:cod', companhias_aereas.remove);

module.exports = router;