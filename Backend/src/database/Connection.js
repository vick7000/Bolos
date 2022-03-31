require('dotenv').config();
const { Sequelize } = require('sequelize');

const confeiteiro = require('../model/confeiteiro');
const entregador = require('../model/entregador');
const usuario = require('../model/usuario');
const config = require('../model/config');
const pedido = require('../model/pedido');
const bolo = require('../model/bolo');
const item = require('../model/item');




const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, '', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    confeiteiro.init(sequelize);
    entregador.init(sequelize);
    usuario.init(sequelize);
    pedido.init(sequelize);
    config.init(sequelize);
    bolo.init(sequelize);
    item.init(sequelize);

    confeiteiro.associate(sequelize.models);
    entregador.associate(sequelize.models);
    usuario.associate(sequelize.models);
    config.associate(sequelize.models);
    pedido.associate(sequelize.models);
    bolo.associate(sequelize.models);
    item.associate(sequelize.models);
    


    sequelize.sync({ force : false });
}

module.exports = {
    sequelize,
    sync
}