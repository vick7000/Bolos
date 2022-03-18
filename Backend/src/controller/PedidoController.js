const Pedido = require('../model/pedido');
const Item = require('../model/item');
const Usuario = require('../model/usuario');
const Confeiteiro = require('../model/confeiteiro');
const Entregador = require('../model/entregador');


const create = async (req, res) => {
    const data = req.body;

    const ret = await Pedido.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;
    const id_pedido = req.query.id;

    let filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    filtro.include = { 
        exclude: ['id_pedido']
    }
    filtro.include = [
        {model: Usuario, attributes: {exclude: ['senha']}},
        {model: Item},
        {model: Confeiteiro},
        {model: Entregador}
    ];

    if(id_pedido !== undefined){
        filtro.include[0].where = {id: id_perfil}
    }

    const ret = await Pedido.findAll(filtro);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Pedido.update(data, {where:{id: id}});

    ret = await Pedido.findAll({where: {id: id}});

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Pedido.destroy({where: {id: id}});

    if(ret == 1) {
        res.json({id: id})
    }else {
        res.status(400).send();
    }


}

module.exports = {
    create,
    read,
    update,
    remove,
}