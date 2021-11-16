const express = require('express');
const router = express.Router();
const { ITR_EQPT } = require('../models'); 

router.get('/', async (req, res) => {
	const equipamentos = await ITR_EQPT.findAll();

	res.render('equipamentos', { equipamentos });
})

router.get('/new', async (req, res) => {
	res.render('equipamentos-form', { 
		edit: false,
		equipamento: null
	});
})

router.get('/:cod/edit', async (req, res) => {
	const equipamento = await ITR_EQPT.findByPk(req.params.cod);
	res.render('equipamentos-form', { 
		edit: true,
		equipamento
	});
})

router.post('/', async (req, res) => {
	await ITR_EQPT.create(req.body)

	res.status(200).send()
});

router.patch('/:cod', async (req, res) => {
	await ITR_EQPT.update(req.body, {
		where: {
			CD_EQPT: req.params.cod
		}
	})

	res.status(200).send()
});

router.delete('/:cod', async (req, res) => {
	await ITR_EQPT.destroy({
		where: { CD_EQPT: req.params.cod }
	})
	res.status(200).send();
});

module.exports = router;