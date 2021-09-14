module.exports = (sequelize,dataTypes) => {

    const alias = "favorite"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

      productId: {
          type:dataTypes.INTEGER,
          allowNull: false,
      },

      userId: {
          Type: dataTypes.INTEGER,
          allowNull: false,
          
      }

    }

    const config = {
        timestamps = true,
        tableName= "favorites",
    }

    const favorites = sequelize.define(alias,cols,config);

    return favorites ; 

}