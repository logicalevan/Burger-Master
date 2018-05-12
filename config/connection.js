// Set up MySQL connection.
require("dotenv").config();

var keys = require('./keys.js');
var mysql = require("mysql");

var password = keys.password.key;

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "cxkyfbmhtbdflxxs",
    password: 	"n6vvo4apbasftqlb",
    database: "d1olelawkqieizsv"
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
