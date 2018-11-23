// DEPENDENCIES
// ==============================================
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// SETUP EXPRESS SERVER
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));
// app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(bodyParser.json());
// Tells app to use handlebars to create the layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Import and use router from controller.js file
var routes = require('./controllers/burgers_controller');
app.use('/', routes);

// DEFINE PORT AND START SERVER LISTEN
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });