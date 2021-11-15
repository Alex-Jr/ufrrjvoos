const express = require('express');
// const { default: connection } = require('./db/connection');
const app = express();
const PORT = 8000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/test/:id', (req, res) => {
	res.render('test', req.params);
});

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});