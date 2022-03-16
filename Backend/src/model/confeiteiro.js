const { Model, DataTypes } = require('sequelize');

class confeiteiro extends Model {
    static init(datacon) {
        super.init(
            {
                nome: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
            },
            {
                sequelize: datacon,
                tableName: 'confeiteiros',
                modelName: 'confeiteiro',
            }
        );
    }

    static associate(models) {
        confeiteiro.hasMany(models.pedido, {foreignKey: 'id_confeiteiro'});
    }

}

module.exports = confeiteiro;