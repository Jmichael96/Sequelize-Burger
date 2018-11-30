var db = require("../models");

module.exports = function (app) {
	// Set basic route to get all database information for homepage
	app.get('/', function (req, res) {
		res.redirect('/burgers');
	})

	// homepage for all da burgers
	app.get("/burgers", function (req, res) {
		db.Burger.findAll({
			include: [db.Customer],
			order: [['burger_name', 'ASC']]
		}).then(function (dbBurgers) {
			var hbsObject = {
				burgers: dbBurgers
			};
			return res.render('index', hbsObject);
		})
	});

	// create a new burger
	app.post('/burgers/create', function (req, res) {
		if (!req.body.burger_name) {
			return res.redirect('/');
		}
		db.Burger.create({
			burger_name: req.body.burger_name

		}).then(function (dbBurger) {
			console.log(dbBurger);
			res.redirect('/');
		})
	});

	//  update the burger
	app.put('/burgers/update', function (req, res) {
		if (req.body.customer) {
			db.Customer.create({
				customer: req.body.customer,
				BurgerId: req.body.burger_id
			}).then(function (dbCustomer) {
				console.log(dbCustomer);
				return db.Burger.update({
					devoured: true
				}, {
						where: {
							id: req.body.BurgerId
						}
					});
			}).then(function (dbBurger) {
				console.log(dbBurger);
				res.json('/');
			})
		}
	})
};
