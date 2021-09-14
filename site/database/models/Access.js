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

    return Access; 

}