const express = require('express');
const router = express.Router();
const { ITR_PAIS } = require('../models'); 

router.get('/', async (req, res) => {
	const paises = await ITR_PAIS.findAll();

	res.render('paises', { paises });
})

router.get('/new', async (req, res) => {
	res.render('paises-form', { 
		edit: false,
		pais: null
	});
})

router.get('/:cod/edit', async (req, res) => {
	const pais = await ITR_PAIS.findByPk(req.params.cod);
	res.render('paises-form', { 
		edit: true,
		pais
	});
})

router.post('/', async (req, res) => {
	await ITR_PAIS.create(req.body)

	res.status(200).send()
});

router.patch('/:cod', async (req, res) => {
	await ITR_PAIS.update(req.body, {
		where: {
			CD_PAIS: req.params.cod
		}
	})

	res.status(200).send()
});

router.delete('/:cod', async (req, res) => {
	await ITR_PAIS.destroy({
		where: { CD_PAIS: req.params.cod }
	})
	res.status(200).send();
});

module.exports = router;