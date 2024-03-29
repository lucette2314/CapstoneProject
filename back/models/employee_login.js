const Sequelize = require('sequelize')
const config = require('./../config');
 
const User = config.define('employee_logins', { //config.define(nombre de la tabla creada en heidi)
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {type: Sequelize.STRING,
        allowNUll: false,
    },
}, {timestamps: false});
module.exports = User;