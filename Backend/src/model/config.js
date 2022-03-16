const { Model, DataTypes } = require('sequelize');

class config extends Model {
    static init(datacon) {
        super.init(
            {
                tipo: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                descricao: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }                               
            },
            {
                sequelize: datacon,
                tableName: 'configs',
                modelName: 'config',
            }
        );
    }

    static associate(models) {
        config.hasMany(models.item, {foreignKey: 'id_config'});
    }

}

module.exports = config;