var orm = require('../config/orm.js');

var ormCall = {
	selectAll: function (tableName, newBurger) {
		orm.selectAll(tableName, function (res){
			newBurger(res);
		});
	},

	insertOne: function (tableName, name, status, date, userInput, newBurger) {
		orm.insertOne(tableName, name, status, date, userInput, function(res) {
			newBurger(res);
		});
	},

	updateOne: function (tableName, tableUpdatedCol, id, newBurger) {
		orm.updateOne(tableName, tableUpdatedCol, id, function(res){
			newBurger(res);
		});
	}
};

module.exports = ormCall;