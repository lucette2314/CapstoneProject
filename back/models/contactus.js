const Sequelize = require('sequelize')
const config = require('./../config');

const Contactus = config.define('contactus', { //config.define(nombre de la tabla creada en heidi)
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},{
    timestamps: false
})
module.exports = Contactus;