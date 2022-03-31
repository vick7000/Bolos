const { Model, DataTypes } = require('sequelize');

class bolo extends Model {
    static init(datacon) {
        super.init(
            {
                nome: {
                    type: DataTypes.STRING(50),
                    allowNull: false
                },
                img: {
                    type: DataTypes.STRING(60000),
                    allowNull: false
                },
                descricao: {
                    type: DataTypes.STRING(1000),
                },
                quantidade: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                custo: {
                    type: DataTypes.FLOAT(5,2),
                    allowNull: false
                }
            },
            {
                sequelize: datacon,
                tableName: 'bolos',
                modelName: 'bolo'
            }
        );
    }

    static associate(models) {
        bolo.hasMany(models.pedido, {foreignKey: 'id_bolo'});
    }
}

module.exports = bolo;