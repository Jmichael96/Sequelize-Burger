'use-strict';

var Burger = require('../models').Burger;

var sequelize = require('../models').sequelize;

module.exports = {
    //on migrate run this
    up: function(queryInterface, Sequelize){
        //insert 5 burgers
        return Burger.bulkCreate([
            {burger_name: 'Jameson Burger'},
            {burger_name: 'Whataburger'},
            {burger_name: 'Guac Burger'},
            {burger_name: 'Say Cheese Burger'},
            {burger_name: 'Monster Burger'}
        ])
    },

    down: function(queryInterface, Sequelize){
        //bulk delete
        return Burger.destroy({where:{ burger_name: [
            'Jameson Burger',
            'Whataburger',
            'Guac Burger',
            'Say Cheese Burger',
            'Monster Burger'
        ]
    }}).then(function(){
        return sequelize.query('ALTER TABLE Burgers AUTO_INCREMENT=1');
    })
    }
};
