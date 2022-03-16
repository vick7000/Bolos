const express = require('express');

const route = express.Router();

const UsuarioController = require('./src/controller/UsuarioController');
const PedidoController = require('./src/controller/PedidoController');
const EntregadorController = require('./src/controller/EntregadorController');
const ItemController = require('./src/controller/ItemController');
const ConfeiteiroController = require('./src/controller/ConfeiteiroController');
const ConfigController = require('./src/controller/ConfigController');

route.post('/usuario', UsuarioController.create);
route.get('/usuario', UsuarioController.read);
route.get('/usuario/:id', UsuarioController.read);
route.put('/usuario/:id', UsuarioController.update);
route.delete('/usuario/:id', UsuarioController.remove);

route.post('/login', UsuarioController.login);

route.post('/pedido', PedidoController.create);
route.get('/pedido', PedidoController.read);
route.get('/pedido/:id', PedidoController.read);
route.put('/pedido/:id', PedidoController.update);
route.delete('/pedido/:id', PedidoController.remove);

route.post('/entregador', EntregadorController.create);
route.get('/entregador', EntregadorController.read);
route.get('/entregador/:id', EntregadorController.read);
route.put('/entregador/:id', EntregadorController.update);
route.delete('/entregador/:id', EntregadorController.remove);

route.post('/item', ItemController.create);
route.get('/item', ItemController.read);
route.get('/item/:id', ItemController.read);
route.put('/item/:id', ItemController.update);
route.delete('/item/:id', ItemController.remove);

route.post('/confeiteiro', ConfeiteiroController.create);
route.get('/confeiteiro', ConfeiteiroController.read);
route.get('/confeiteiro/:id', ConfeiteiroController.read);
route.put('/confeiteiro/:id', ConfeiteiroController.update);
route.delete('/confeiteiro/:id', ConfeiteiroController.remove);

route.post('/config', ConfigController.create);
route.get('/config', ConfigController.read);
route.get('/config/:id', ConfigController.read);
route.put('/config/:id', ConfigController.update);
route.delete('/config/:id', ConfigController.remove);


module.exports = route;