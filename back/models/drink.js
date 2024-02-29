const Sequelize = require('sequelize')
const config = require('./../config');
const DrinkCategories = require('./drink_categories');

const Drinks = config.define('drinks', { //config.define(nombre de la tabla creada en heidi)
    
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
    drink_category_id: { //foreign key... mel
        type: Sequelize.INTEGER,
        references: {
            model: DrinkCategories, // Reference the FoodCategories model
            key: 'id',             // Reference the id column in the FoodCategories model
        },
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    drink_category_id: { //foreign key... mel
        type: Sequelize.INTEGER,
        references: {
            model: 'drink_categories',
            key: 'id',
        },
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
},

    { timestamps: false });
    
module.exports = Drinks;