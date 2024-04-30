const envs = require('./configBD');

const Sequelize = require('sequelize');

const conexaoBD = new Sequelize(
    envs.DB, envs.USER, envs.PASSWORD, {
        dialect: 'postgres'
    }
);

module.exports = conexaoBD;