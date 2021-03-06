const Confeiteiro = require('../model/confeiteiro');


const create = async (req, res) => {
    const data = req.body;

    const ret = await Confeiteiro.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    let filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    const ret = await Confeiteiro.findAll(filtro);


    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Confeiteiro.update(data, {where:{id: id}});

    ret = await Confeiteiro.findAll({where: {id: id}});

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Confeiteiro.destroy({where: {id: id}});

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