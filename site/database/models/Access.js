module.exports = (sequelize,dataTypes) => {

    const alias = "access"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },

    }

    const config = {
        timestamps: false,
        tableName: "access",
    }

    const Access = sequelize.define(alias,cols,config);

    Access.associate = (models) =>{
        Access.hasMany(models.users,{
            as: "users",
            foreignKey: "accessId"
        })
    }

    return Access; 

}