
module.exports = (sequelize,dataTypes) =>{

    const alias = "countrys";

    const cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };

    const config = {
        tableName:  "countrys",
        timestamps: false
    };

    const Country = sequelize.define(alias,cols,config);

    return Country;
}