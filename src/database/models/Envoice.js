module.exports = (sequelize, dataTypes) => {
  let alias = 'Envoice'; 
  let cols = {
      id:  {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
  },

  idshopping: {
    field: 'idshopping',
    allowNull: false,
    type: dataTypes.INTEGER,
    // references: {
    //   model: Shopping,
    //   key: 'id'
    // },
   },
 
  iduser: {
    field: 'iduser',
    allowNull: false,
    type: dataTypes.INTEGER,
    // references: {
    //   model: USER,
    //   key: 'id'
    // },
   
  }
};
let config = {
  timestamps: false,
  
}
const Envoice= sequelize.define(alias, cols, config);

Envoice.associate = function(models) {
  Envoice.belongsTo(models.User, { 
            as: "envoice", 
            foreignKey: "users_id"
        })
  Envoice.hasMany(models.Shopping, { 
          as: "shopping",
          foreignKey: 'envoices_id1',
      })
    }

    return Envoice
};