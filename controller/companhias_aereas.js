/**
 * funções com "get_" no nome retornam uma view.
 * funções sem "get_" no nome retornam somente o status
 */
const { ITR_CMPN_AEREA } = require('../models'); 

async function get_list(req, res) {
  const companhias_aereas = await ITR_CMPN_AEREA.findAll();

  res.render('companhias_aereas', { companhias_aereas });
}

async function get_create (req, res) {
	res.render('companhias_aereas_form', { 
		edit: false,
		companhia_aerea: null
	});
}

async function get_update (req, res) {
	const companhia_aerea = await ITR_CMPN_AEREA.findByPk(req.params.cod);
	res.render('companhias_aereas_form', { 
		edit: true,
		companhia_aerea
	});
}

async function create (req, res) {
	await ITR_CMPN_AEREA.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	console.log(req.params.cod, req.body)
	await ITR_CMPN_AEREA.update(req.body, {
		where: {
			CD_CMPN_AEREA: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_CMPN_AEREA.destroy({
		where: { CD_CMPN_AEREA: req.params.cod }
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