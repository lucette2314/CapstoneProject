const Sequelize = require('sequelize')
const config = require('./../config');
const FoodCategories = require('./food_categories.js');

const Foods = config.define('foods', { //config.define(nombre de la tabla creada en heidi)
    
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
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    food_category_id: { //foreign key... mel
        type: Sequelize.INTEGER,
        references: {
            model: FoodCategories, // Reference the FoodCategories model
            key: 'id',             // Reference the id column in the FoodCategories model
        },
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
    },
},

    { timestamps: false });

module.exports = Foods;