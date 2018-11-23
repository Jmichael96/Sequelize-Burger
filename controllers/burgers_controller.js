// Import (require) burger.js
var burger = require('../models/burgers');
var express = require('express');


// Create app router
var router = express.Router();


router.get('/', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// POST - insertOne
router.post('/burgers/create', function (req, res) {
	burger.insertOne(['burger_name'], [req.body.name], function () {
		res.redirect('/');
	});
});

// PUT - updateOne
router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/');
	});
});

// DELETE - deleteOne
router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.deleteOne(condition, function () {
		res.redirect('/');
	});
});

// Export router
// =============================================================================
module.exports = router;