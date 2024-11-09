const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASS,
    database: 'users'
})

db.connect(function (err) {
    if (err) return console.log("Error Connecting MYSQL", err);
    console.log("MYSQL Connected!");
});

module.exports = db;