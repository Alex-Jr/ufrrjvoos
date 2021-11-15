const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "manager",
  password: "123456789",
  port: 6000
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = connection;