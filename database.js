const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('foro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}