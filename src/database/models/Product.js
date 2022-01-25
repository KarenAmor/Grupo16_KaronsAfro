module.exports = (sequelize, dataTypes) => {
  let alias = 'Product'; 
  let cols = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
  },
  name: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: dataTypes.INTEGER,
    allowNull: false,
  },
  reference:{
    type: dataTypes.INTEGER,
    allowNull: false
   },
   quantity:{
    type: dataTypes.INTEGER,
    allowNull: false,
   },
 
  description: {
    type: dataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  
};
let config = {
  tableName: "products",
  timestamps: false
}
const Product= sequelize.define(alias,cols,config);

Product.associate = function (models) {
  Product.hasMany(models.Shopping, { 
      as: "shopping",
      foreignKey: "products_id"
  })  
}

return Product
}