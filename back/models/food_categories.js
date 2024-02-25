const Sequelize = require('sequelize')
const config = require('./../config');
const Foods = require('./food');

const FoodCategories = config.define('food_categories', { //config.define(nombre de la tabla creada en heidi)
    
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
            model: 'food_categories',
            key: 'id',
        },
    }
},{
    timestamps: false
})

module.exports = FoodCategories;