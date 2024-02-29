const Sequelize = require('sequelize')
const config = require('./../config');

const DrinkCategories = config.define('drink_categories', { //config.define(nombre de la tabla creada en heidi)
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'drink_categories',
            key: 'id',
        },
    }
},{
    timestamps: false
})
module.exports = DrinkCategories;