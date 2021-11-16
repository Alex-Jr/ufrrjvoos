const express = require('express');
const cors = require("cors");
const router = require('./routes');
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

Object.entries(router).forEach(([key, value]) => {
	app.use(`/${key}`	, value);
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});