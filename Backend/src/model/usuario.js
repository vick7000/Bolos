const { Model, DataTypes } = require('sequelize');

class usuario extends Model {
    static init(datacon) {
        super.init(
            {
                nome: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                telefone: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                endereco: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                complemento: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                cep: {
                    type: DataTypes.STRING(9),
                    allowNull: false,
                },

                email: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: {
                            msg: "E-mail ou senha invalido",
                        }
                    }
                    
                },
                senha: {
                    type: DataTypes.STRING(150),
                    allowNull: false,

                },

                nome_titular: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                numero:{
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                data_criacao:{
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                validade:{
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                codigo:{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },

                pix:{
                    type: DataTypes.STRING(500),
                    allowNull: false,
                }


            },
            {
                sequelize: datacon,
                tableName: 'usuarios',
                modelName: 'usuario',
            }
        );
    }

    static associate(models) {
        usuario.hasMany(models.pedido,{ foreignKey: 'id_usuario'});
    }

}

module.exports = usuario;