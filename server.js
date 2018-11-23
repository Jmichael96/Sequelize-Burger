// DEPENDENCIES
// ==============================================
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//brings in models
var models = require('./models');
//syncs the models
models.sequelize.sync();
// SETUP EXPRESS SERVER
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(bodyParser.json());
// Tells app to use handlebars to create the layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Import and use router from controller.js file
var routes = require('./controllers/burgers_controller');
app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

// DEFINE PORT AND START SERVER LISTEN
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

console.log(module.exports);