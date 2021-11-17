const { ITR_ARPT, ITR_PAIS, ITR_UF } = require('../models'); 

async function get_list(req, res) {
  const aeroportos = await ITR_ARPT.findAll();

  res.render('aeroportos', { aeroportos });
}

async function get_create (req, res) {
	const paises = await ITR_PAIS.findAll();
	const ufs = await ITR_UF.findAll();

	res.render('aeroportos_form', { 
		edit: false,
		aeroporto: null,
		paises,
		ufs
	});
}

async function get_update (req, res) {
	const aeroporto = await ITR_ARPT.findByPk(req.params.cod);
	const paises = await ITR_PAIS.findAll();
	const ufs = await ITR_UF.findAll();

	res.render('aeroportos_form', { 
		edit: true,
		aeroporto,
		paises,
		ufs
	});
}

async function create(req, res) {
	await ITR_ARPT.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	await ITR_ARPT.update(req.body, {
		where: {
			CD_ARPT: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_ARPT.destroy({
		where: { CD_ARPT: req.params.cod }
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