const { ITR_RESV, ITR_VOO } = require('../models'); 

async function get_list(req, res) {
  const reservas = await ITR_RESV.findAll();

  res.render('reservas', { reservas });
}

async function get_create (req, res) {
	const voos = await ITR_VOO.findAll();

	res.render('reservas_form', { 
		edit: false,
		reserva: null,
		voos
	});
}

async function get_update (req, res) {
	const reserva = await ITR_RESV.findOne({
    where: {
      CD_PSGR: req.params.cod,
      NR_VOO: req.query.NR_VOO,
      DT_SAIDA_VOO: req.query.DT_SAIDA_VOO
    },
  });
	const voos = await ITR_VOO.findAll();

	res.render('reservas_form', { 
		edit: true,
		reserva,
		voos,
	});
}

async function create(req, res) {
	await ITR_RESV.create(req.body)

	res.status(200).send()
}

async function update(req, res) {
	await ITR_RESV.update(req.body, {
		where: {
			CD_PSGR: req.params.cod,
      NR_VOO: req.query.NR_VOO,
      DT_SAIDA_VOO: req.query.DT_SAIDA_VOO
		}
	})

	res.status(200).send()
}

async function remove(req, res){
	await ITR_RESV.destroy({
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