var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8000;

var app = express();
var db = require('./models');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes-
var routes = require('./controllers/burgers_controller');
app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Now running at localhost:" + PORT);
  });
});