function roleData(sequelize, Datatypes){
    alias = 'role';
        cols = {
        id:{
            type: Datatypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        }
    }
    config = {timestamps: false, freezeTableName: true};
 const rol = sequelize.define(alias,cols,config);

 rol.associate = function (modelos){

    rol.hasMany(modelos.users, {   
       as: "user_rol",
       foreignKey: "role_id"
        });
    };
  
 return rol
} 
module.exports = roleData;
