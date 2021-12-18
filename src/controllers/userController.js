const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');


const { validationResult } = require('express-validator');



const userController = {
    
    registro: function(req,res){
        res.render(path.resolve(__dirname, '../views/register'));
    },

    create: (req,res)=>{     
      
      const resultValidation=validationResult(req);

      // if (resultValidation.isEmpty()){
        let db=JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data/users.json")))
        let lastUser=db.pop()
        db.push(lastUser)      
        let newUser={
            id: lastUser.id+1,
            Name: req.body.nombreUsuario,
            LastName: req.body.apellidoUsuario,
            Email: req.body.emailUsuario,
            Password: bcrypt.hashSync(req.body.contraseñaUsuario, 10),
            ConfirmPassword: bcrypt.hashSync(req.body.confirmacionContraseñaUsuario, 10),
            Avatar: req.file ? req.file.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU",
            Role: 2 
        }
        db.push(newUser)
        let usersJson=JSON.stringify(db,null,4)
        fs.writeFileSync(path.resolve(__dirname,"../data/users.json"),usersJson)
        res.redirect("/login");
      // }
      //  }else{
      //   return res.render ('register', {
      //     errors: resultValidation.mapped(),
      //     oldData: req.body
      //     });

      //  }  
       
     
      
      
  },
}

  module.exports = userController;
 
    

