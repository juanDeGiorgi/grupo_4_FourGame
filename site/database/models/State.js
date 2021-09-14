

module.exports = (sequelize,dataTypes) =>{

    const alias = "states";

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
        },

        countryId: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: "states",
        timestamps: false
    };

    const State = sequelize.define(alias,cols,config);

    return State;
}