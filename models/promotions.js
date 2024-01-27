const Sequelize = require('sequelize')
const config = require('./../config');

const Promotions = config.define('promotions', { //config.define(nombre de la tabla creada en heidi)
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valid_from: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    valid_to: {
        type: Sequelize.DATE,
        allowNull: false,
    },
},{
    timestamps: false
})
module.exports = Promotions;