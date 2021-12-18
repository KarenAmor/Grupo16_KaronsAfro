const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const productFilePath = path.resolve(__dirname, '../data/users.json');

const usersController = {
    login: (req, res) => {
      
       res.render('login');
    },

    processLogin: function(req,res){
        console.log("form info",req.body)
        let errors=validationResult(req);
        if(errors.isEmpty()){
            let usersJSON = fs.readFileSync(productFilePath,{errors});
            let users;
            let usuarioALoguearse;
            if(usersJSON==""){
                users=[]; 
            }else{
                users=JSON.parse(usersJSON);
            }
            for(let i=0; i < users.length; i++){
                if(users[i].Email== req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].Password)){
                        usuarioALoguearse= users[i];
                        break
                    }
                }
            }
            if(usuarioALoguearse==undefined){
                return res.render('login', {errors:[
                    {msg: 'Credenciales invalidas'}
                ]});
            }
            req.session.usuarioLogueado= usuarioALoguearse;
        }else{
            return res.render('login', {errors:errors.errors});
        }
    }
}
module.exports= usersController