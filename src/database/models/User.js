module.exports = (sequelize, dataTypes) => {
  let alias = 'User'; 
  let cols  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
  },
  first_name: {
    type: dataTypes.STRING(100),
    allowNull: false
},
last_name: {
  type: dataTypes.STRING(100),
  allowNull: false
},
  email: {
    allowNull: false,
    type: dataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: dataTypes.STRING
  },
  //confirmar contraseña
  role: {
    allowNull: false,
    type: dataTypes.INTEGER,
  },
  //avatar
  avatar: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  
};
let config = {
  timestamps: false
};
const User = sequelize.define(alias,cols,config);

User.associate = function (models) {
  User.hasMany(models.Envoice, { 
        as: "users",
        foreignKey: "users_id"
    })
  }

return User
};
