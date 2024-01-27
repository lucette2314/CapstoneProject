const Sequelize = require('sequelize');
const config = new Sequelize("capstone", "root", "1234", {dialect:'mariadb', port: 3306});

module.exports = config;