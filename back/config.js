const Sequelize = require('sequelize');
const config = new Sequelize("cp_mb", "mb", "123456321Asd", {dialect:'mariadb',host: '97.74.184.238', port: 3306});

module.exports = config;