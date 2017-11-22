const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//serve statis using route
app.use(express.static("public"));
app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// mysql://b5a219a5e5943e:5118e169@us-cdbr-iron-east-05.cleardb.net/heroku_e61d577eae314d0?reconnect=true