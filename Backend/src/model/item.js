const { Model, DataTypes } = require('sequelize');

class item extends Model {
    static init(datacon) {
        super.init(
            { 
                id_config: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'configs',
                        key: 'id',
                    }
                },
                quantidade: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                    
            },
            {
                sequelize: datacon,
                tableName: 'itens',
                modelName: 'item',
            }
        );
    }

    
    static associate(models) {
        item.hasMany(models.pedido, {foreignKey: 'id_item'});
        item.belongsTo(models.config, {foreignKey: 'id_config'});
    }    
    
}

module.exports = item;