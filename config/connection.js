// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "b5a219a5e5943e",
//   password: "5118e169",
//   database: "heroku_e61d577eae314d0"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;


const mysql = require('mysql')

var config = {
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b5a219a5e5943e",
  password: "5118e169",
  database: "heroku_e61d577eae314d0"
};

var pool = mysql.createPool(config)

module.exports = {
    query: function(){
        var sql_args = [];
        var args = [];
        for(var i=0; i<arguments.length; i++){
            args.push(arguments[i]);
        }
        var callback = args[args.length-1]; //last arg is callback
        pool.getConnection(function(err, connection) {
        if(err) {
                console.log(err);
                return callback(err);
            }
            if(args.length > 2){
                sql_args = args[1];
            }
        connection.query(args[0], sql_args, function(err, results) {
          connection.release(); // always put connection back in pool after last query
          if(err){
                    console.log(err);
                    return callback(err);
                }
          callback(null, results);
        });
      });
    }
};
