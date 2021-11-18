const { ITR_VOO, ITR_ROTA_VOO, ITR_ARNV, ITR_ARPT, ITR_EQPT } = require('../models'); 

async function get_list(req, res) {
  const voos = await ITR_VOO.findAll();

  res.render('voos', { voos });
}

async function get_create (req, res) {
	const aeronaves = await ITR_ARNV.findAll({ include: ITR_EQPT });
	const rotas_voos = await ITR_ROTA_VOO.findAll({ include: [
		{ 
			model: ITR_ARPT,
			as: 'ITR_ARPT_ORIG', 
		},
		{
			model: ITR_ARPT,
			as: 'ITR_ARPT_DEST', 
		}
	]});

	res.render('voos_form', { 
		edit: false,
		aeronaves,
		rotas_voos
	});
}

async function get_update (req, res) {
	console.log(req)
	const voo = await ITR_VOO.findOne({
		where: {
			NR_VOO: req.params.cod,
			DT_SAIDA_VOO: req.query.DT_SAIDA_VOO
		}
	});
	const aeronaves = await ITR_ARNV.findAll({ include: ITR_EQPT });
	const rotas_voos = await ITR_ROTA_VOO.findAll({ include: [
		{ 
			model: ITR_ARPT,
			as: 'ITR_ARPT_ORIG', 
		},
		{
			model: ITR_ARPT,
			as: 'ITR_ARPT_DEST', 
		}
	]});

	res.render('voos_form', { 
		edit: true,
		voo,
		aeronaves,
		rotas_voos
	});
}

async function create(req, res) {
	await ITR_VOO.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	await ITR_VOO.update(req.body, {
		where: {
			NR_VOO: req.params.cod,
			DT_SAIDA_VOO: req.query.DT_SAIDA_VOO
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_VOO.destroy({
		where: { NR_VOO: req.params.cod }
	})
	res.status(200).send();
}

module.exports = {
  get_list,
  get_create,
  get_update,
  create,
  update,
  remove
}