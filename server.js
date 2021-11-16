const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const { ITR_EQPT, ITR_PAIS } = require('./models');
// const { default: connection } = require('./db/connection');
const app = express();
const PORT = 8000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: '*'
}));

app.get('/equipamentos', async (req, res) => {
	const equipamentos = await ITR_EQPT.findAll();

	res.render('equipamentos', { equipamentos });
})

app.get('/paises', async (req, res) => {
	const paises = await ITR_PAIS.findAll();

	res.render('paises', { paises });
})

app.get('/', (req, res) => {
	const routes = ['equipamentos', 'aeronaves', 'companhias aérea', 'voos', 'passageiros',
		'países', 'rotas de voos', 'reservas', 'aeroportos', 'uf', 'consultar companhias',
		'consultar equipamentos', 'consultar clientes', 'consultar voos', 'consultar rotas de voos'];
	
	res.render('index', { routes });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});