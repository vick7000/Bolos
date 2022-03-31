const { Model, DataTypes } = require('sequelize');

class pedido extends Model {
    static init(datacon) {
        super.init(
            {                
                data_envio: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },
                tipo_bolo: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },
                id_bolo: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'bolos',
                        key: 'id',
                    }
                },
                id_item: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'itens',
                        key: 'id',
                    }
                },

                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'usuarios',
                        key: 'id',
                    }
                },

                id_confeiteiro: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'confeiteiros',
                        key: 'id',
                    }
                },

                id_entregador: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'entregadores',
                        key: 'id',
                    }
                },
            },
            {
                sequelize: datacon,
                tableName: 'pedidos',
                modelName: 'pedido',
            }
        );
    }

    static associate(models) {
        pedido.belongsTo(models.confeiteiro, {foreignKey: 'id_confeiteiro'});
        pedido.belongsTo(models.entregador, {foreignKey: 'id_entregador'});
        pedido.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
        pedido.belongsTo(models.item, {foreignKey: 'id_item'});
        pedido.belongsTo(models.bolo, {foreignKey: 'id_bolo'});

        
        
    }
}

module.exports = pedido;