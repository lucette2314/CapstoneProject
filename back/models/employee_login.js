const Sequelize = require('sequelize')
const config = require('./../config');

const EmployeeLogin = config.define('employee_logins', { //config.define(nombre de la tabla creada en heidi)
    
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
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },   
},{
    timestamps: false
})
module.exports = EmployeeLogin;