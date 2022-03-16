const { Model, DataTypes } = require('sequelize');

class entregador extends Model {
    static init(datacon) {
        super.init(
            {
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                envio: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                }                               
            },
            {
                sequelize: datacon,
                tableName: 'entregadores',
                modelName: 'entregador',
            }
        );
    }

    static associate(models) {
        entregador.hasMany(models.pedido, {foreignKey: 'id_entregador'});
    }

}

module.exports = entregador;