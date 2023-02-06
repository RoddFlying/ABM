function userData(sequelize, Datatypes){
    alias = 'users';
        cols = {
        id:{
            type: Datatypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        surname: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING
        },
        address: {
            type: Datatypes.STRING
        },   
        phone: {
            type: Datatypes.INTEGER
        },
        password: {
            type: Datatypes.STRING
        }, 
        image: {
            type: Datatypes.STRING
        },
        role_id: {
            type: Datatypes.TINYINT
        }
    }
    config = {timestamps: false, freezeTableName: true};
 const users = sequelize.define(alias,cols,config);

 users.associate = function (modelos){

    users.belongsTo(modelos.role, {   
       as: "rol",
       foreignKey: "role_id"
        });
    };
  
 return users
} 
module.exports = userData;
