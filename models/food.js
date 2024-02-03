const Sequelize = require('sequelize')
const config = require('./../config');

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
    food_category_id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        foreignKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    // image: {
    //     type: Sequelize.,
    //     allowNull: false,
    // },
},{
    timestamps: false
})
module.exports = Foods;