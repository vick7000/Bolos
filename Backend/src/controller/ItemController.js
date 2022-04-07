const Item = require('../model/item');
const Config = require('../model/config');


const create = async (req, res) => {
    const data = req.body;

    const ret = await Item.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    let id_config = req.query.id_config;

    let filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    filtro.attributes = {
        exclude: ['id_config']
    }

    filtro.include = [
        { model: Config}
    ];

    if(id_config !== undefined){
        filtro.include[0].where = {id: id_config}
    }
    const ret = await Item.findAll(filtro);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Item.update(data, {where:{id: id}});

    ret = await Item.findAll({where: {id: id}});

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Item.destroy({where: {id: id}});

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