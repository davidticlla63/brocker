import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import SucursalUsuario from "./SucursalUsuario";
import UsuarioPerfil from "./UsuarioPerfil";


const Usuario = sequelize.define('Usuario', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    //nombrecompleto: Sequelize.STRING,
    nick: Sequelize.STRING,
    password: Sequelize.STRING,    
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: Sequelize.STRING,
    empresaid :Sequelize.STRING,
    personalid :Sequelize.STRING

}, {
    timestamps: false,
    tableName: 'usuario'

    
});
Usuario.hasMany(SucursalUsuario, { foreignKey: 'usuarioid', sourceKey: 'id' });
SucursalUsuario.belongsTo(Usuario, { foreignKey: 'usuarioid', sourceKey: 'id' });

Usuario.hasMany(UsuarioPerfil, { foreignKey: 'usuarioid', sourceKey: 'id' });
UsuarioPerfil.belongsTo(Usuario, { foreignKey: 'usuarioid', sourceKey: 'id' });

/* 
Usuario.prototype.generatePasswordHash = async function() {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds)
  };


  Usuario.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
 */
export default Usuario;