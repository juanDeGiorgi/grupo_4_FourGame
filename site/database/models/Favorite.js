module.exports = (sequelize,dataTypes) => {

    const alias = "favorites"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        productId: {
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
        tableName: "favorites",
    }

    const Favorite = sequelize.define(alias,cols,config);

    return Favorite; 

}