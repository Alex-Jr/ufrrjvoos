const express = require('express');
// const { default: connection } = require('./db/connection');
const app = express();
const PORT = 8000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public')) 

app.get('/equipamentos', (req, res) => {
	const equipamentos = [{
		cod: 1,
		nome: 'Boeing 777',
		tipo: 'Avião',
		qntMotor: 4,
		qntPassageiros: 300
	}, {
		cod: 2,
		nome: 'Boeing 747',
		tipo: 'Avião',
		qntMotor: 2,
		qntPassageiros: 500
	}];

	res.render('equipamentos', { equipamentos })
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