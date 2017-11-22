var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b5a219a5e5943e",
  password: "5118e169",
  database: "heroku_e61d577eae314d0"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
