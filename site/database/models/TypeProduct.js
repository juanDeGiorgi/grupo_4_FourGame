module.exports = (sequelize,dataTypes) => {

    const alias = "typeProducts"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type:dataTypes.STRING(255),
            allowNull: false,
        },

    }

    const config = {
        timestamps = true,
        tableName= "typeProducts",
    }

    const TypeProduct = sequelize.define(alias,cols,config);

    return TypeProduct; 

}