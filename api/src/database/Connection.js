require('dotenv').config();
const { Sequelize } = require('sequelize');

const usuario = require('../model/usuario');
const pedido = require('../model/pedido');
const entregador = require('../model/entregador');
const item = require('../model/item');
const confeiteiro = require('../model/confeiteiro');
const config = require('../model/config');


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, '', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    usuario.init(sequelize);
    entregador.init(sequelize);
    confeiteiro.init(sequelize);
    config.init(sequelize);
    item.init(sequelize);
    pedido.init(sequelize);

    usuario.associate(sequelize.models);
    pedido.associate(sequelize.models);
    entregador.associate(sequelize.models);
    item.associate(sequelize.models);
    confeiteiro.associate(sequelize.models);
    config.associate(sequelize.models);

    sequelize.sync({ force : false });
}

module.exports = {
    sequelize,
    sync
}