const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false,
    
    },
    instructions:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false

    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false

    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false
    
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false

    },
  }, { timestamps: false });
};
