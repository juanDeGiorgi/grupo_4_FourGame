module.exports = (sequelize,dataTypes) => {

    const alias = "address"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        street: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },

        number: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        postalCode: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        neighborhood: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        note: {
            type: dataTypes.STRING(500),
            allowNull: true
        },

        countryId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        stateId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        userId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }

    const config = {
        timestamps: false,
        tableName: "address",
    }

    const Address = sequelize.define(alias,cols,config);

    return Address ; 

}