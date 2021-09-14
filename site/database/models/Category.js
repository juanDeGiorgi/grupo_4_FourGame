module.exports = (sequelize,dataTypes) => {

    const alias = "categories"; 

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
        timestamps: false,
        tableName: "categories",
    }

    const Category = sequelize.define(alias,cols,config);

    return Category; 

}