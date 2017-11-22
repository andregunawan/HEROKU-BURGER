//Import mySQL connection
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName, newBurger) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if(err) throw err;
      newBurger(result);
    });
  },
  insertOne: function(tableName, name, status, date, userInput, newBurger) {
    var queryString = "INSERT INTO ??(??, ??, ??) VALUES(?, FALSE, CURRENT_TIMESTAMP)";
    console.log(queryString);
    connection.query(queryString, [tableName, name, status, date, userInput], function(err, result) {
      if(err) throw err;
      newBurger(result);
    });
  },
  updateOne: function(tableName, tableUpdatedCol, id, newBurger) {
    var queryString = "UPDATE ?? SET ?? = TRUE WHERE id = ?";
    connection.query(queryString, [tableName, tableUpdatedCol, id], function(err, result) {
      if(err) throw err;
      newBurger(result);
    });
  }
};

module.exports = orm;


