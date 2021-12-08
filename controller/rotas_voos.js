/**
 * funções com "get_" no nome retornam uma view.
 * funções sem "get_" no nome retornam somente o status
 */
const { ITR_ROTA_VOO, ITR_ARPT } = require('../models'); 

async function get_list(req, res) {
  const rotas_voos = await ITR_ROTA_VOO.findAll();

  res.render('rotas_voos', { rotas_voos });
}

async function get_create (req, res) {
  const aeroportos = await ITR_ARPT.findAll();

	res.render('rotas_voos_form', { 
		edit: false,
		rota_voo: null,
    aeroportos
	});
}

async function get_update (req, res) {
	const rota_voo = await ITR_ROTA_VOO.findByPk(req.params.cod);
  const aeroportos = await ITR_ARPT.findAll();

	res.render('rotas_voos_form', { 
		edit: true,
		rota_voo,
    aeroportos
	});
}

async function create(req, res) {
	await ITR_ROTA_VOO.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	await ITR_ROTA_VOO.update(req.body, {
		where: {
			NR_ROTA_VOO: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_ROTA_VOO.destroy({
		where: { NR_ROTA_VOO: req.params.cod }
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