/**
 * funções com "get_" no nome retornam uma view.
 * funções sem "get_" no nome retornam somente o status
 */
const { ITR_PSGR, ITR_PAIS, sequelize  } = require('../models'); 

async function get_list(req, res) {
  const passageiros = await ITR_PSGR.findAll();

  res.render('passageiros', { passageiros });
}

async function get_create (req, res) {
	const paises = await ITR_PAIS.findAll();

	res.render('passageiros_form', { 
		edit: false,
		passageiro: null,
		paises,
	});
}

async function get_update (req, res) {
	const passageiro = await ITR_PSGR.findByPk(req.params.cod);
	const paises = await ITR_PAIS.findAll();

	res.render('passageiros_form', { 
		edit: true,
		passageiro,
		paises,
	});
}

async function create(req, res) {
	await ITR_PSGR.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	await ITR_PSGR.update(req.body, {
		where: {
			CD_PSGR: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_PSGR.destroy({
		where: { CD_PSGR: req.params.cod }
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