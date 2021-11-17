const { ITR_UF } = require('../models'); 

async function get_list(req, res) {
  const ufs = await ITR_UF.findAll();

  res.render('ufs', { ufs });
}

async function get_create (req, res) {
	res.render('ufs_form', { 
		edit: false,
		uf: null
	});
}

async function get_update (req, res) {
	const uf = await ITR_UF.findByPk(req.params.cod);
	res.render('ufs_form', { 
		edit: true,
		uf
	});
}

async function create(req, res) {
	await ITR_UF.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	await ITR_UF.update(req.body, {
		where: {
			SG_UF: req.params.cod
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_UF.destroy({
		where: { SG_UF: req.params.cod }
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