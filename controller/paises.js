const { ITR_PAIS } = require('../models'); 

async function get_list(req, res) {
  const paises = await ITR_PAIS.findAll();

  res.render('paises', { paises });
}

async function get_create (req, res) {
	res.render('paises-form', { 
		edit: false,
		pais: null
	});
}

async function get_update (req, res) {
	const pais = await ITR_PAIS.findByPk(req.params.cod);
	res.render('paises-form', { 
		edit: true,
		pais
	});
}

async function create() {
  async (req, res) => {
    await ITR_PAIS.create(req.body)
  
    res.status(200).send()
  }
}

async function update(req, res) {
	await ITR_PAIS.update(req.body, {
		where: {
			CD_PAIS: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_PAIS.destroy({
		where: { CD_PAIS: req.params.cod }
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