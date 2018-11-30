var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

var app = express();
var db = require('./models');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes-
require('./controllers/burgers_controller')(app);

db.sequelize.sync().then(function(){
app.listen(PORT, function() {
    console.log("Now running at localhost:" + PORT);
});
});