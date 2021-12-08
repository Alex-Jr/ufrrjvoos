/**
 * funções com "get_" no nome retornam uma view.
 * funções sem "get_" no nome retornam somente o status
 */
const { ITR_ARNV,  ITR_EQPT, ITR_CMPN_AEREA } = require('../models'); 

async function get_list(req, res) {
  const aeronaves = await ITR_ARNV.findAll({
		include: [ITR_EQPT, ITR_CMPN_AEREA]
	});

  res.render('aeronaves', { aeronaves });
}

async function get_create (req, res) {
	const equipamentos = await ITR_EQPT.findAll();
	const companhias_aereas = await ITR_CMPN_AEREA.findAll();

	res.render('aeronaves_form', { 
		edit: false,
		aeronave: null,
		equipamentos,
		companhias_aereas,
	});
}

async function get_update (req, res) {
	const aeronave = await ITR_ARNV.findByPk(req.params.cod);
	const equipamentos = await ITR_EQPT.findAll();
	const companhias_aereas = await ITR_CMPN_AEREA.findAll();

	res.render('aeronaves_form', { 
		edit: true,
		aeronave,
		equipamentos,
		companhias_aereas,
	});
}

async function create(req, res) {
	await ITR_ARNV.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	console.log(req.params.cod, req.body)
	await ITR_ARNV.update(req.body, {
		where: {
			CD_ARNV: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_ARNV.destroy({
		where: { CD_ARNV: req.params.cod }
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