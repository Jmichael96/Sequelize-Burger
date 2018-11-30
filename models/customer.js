module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Customer;
}