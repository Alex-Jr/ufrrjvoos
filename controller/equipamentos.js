const { ITR_EQPT } = require('../models'); 

async function get_list(req, res) {
  const equipamentos = await ITR_EQPT.findAll();

  res.render('equipamentos', { equipamentos });
}

async function get_create (req, res) {
	res.render('equipamentos-form', { 
		edit: false,
		equipamento: null
	});
}

async function get_update (req, res) {
	const equipamento = await ITR_EQPT.findByPk(req.params.cod);
	res.render('equipamentos-form', { 
		edit: true,
		equipamento
	});
}

async function create() {
  async (req, res) => {
    await ITR_EQPT.create(req.body)
  
    res.status(200).send()
  }
}

async function update(req, res) {
	await ITR_EQPT.update(req.body, {
		where: {
			CD_EQPT: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_EQPT.destroy({
		where: { CD_EQPT: req.params.cod }
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