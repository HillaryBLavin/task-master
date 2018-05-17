var mysql = require('mysql');
var connection = mysql.connection({
    host: 'localhost',
    user: 'root',
    password: 'backend1279!',
    database: 'tasks_db'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadid);
});

module.exports = connection;