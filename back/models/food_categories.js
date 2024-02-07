const Sequelize = require('sequelize')
const config = require('./../config');

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
    }
},{
    timestamps: false
})
module.exports = FoodCategories;