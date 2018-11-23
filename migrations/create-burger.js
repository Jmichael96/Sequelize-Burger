'use strict';

module.exports = {
    //on migration create table from model
    up: function(queryInterface, Sequelize){
        return queryInterface.createTable('Burgers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            burger_name:{
                type: Sequelize.STRING
            },
            devoured:{
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createAt:{
                allowNull: false,
                type: Sequelize.DATE
            },
            updateAt:{
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    //on migrate undo and drop table
    down: function(queryInterface, Sequelize){
        return queryInterface.dropTable('Burgers');
    }
};