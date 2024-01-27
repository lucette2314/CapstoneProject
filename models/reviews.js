const Sequelize = require('sequelize')
const config = require('./../config');

const Reviews = config.define('reviews', { //config.define(nombre de la tabla creada en heidi)
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    rating: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },
    comments: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},{
    timestamps: false
})
module.exports = Reviews;