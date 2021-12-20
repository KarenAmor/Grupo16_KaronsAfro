const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersDb=require('../data/users.json');


const { validationResult } = require('express-validator');



const userController = {

    registro: function (req, res) {
        res.render(path.resolve(__dirname, '../views/register'));
    },

    create: (req, res) => {

        const resultValidation = validationResult(req);

        // if (resultValidation.isEmpty()){
        let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json")))
        let lastUser = db.pop()
        db.push(lastUser)
        let newUser = {
            id: lastUser.id + 1,
            Name: req.body.nombreUsuario,
            LastName: req.body.apellidoUsuario,
            Email: req.body.emailUsuario,
            Password: bcrypt.hashSync(req.body.contraseñaUsuario, 10),
            ConfirmPassword: bcrypt.hashSync(req.body.confirmacionContraseñaUsuario, 10),
            Avatar: req.file ? req.file.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU",
            Role: 2
        }
        db.push(newUser)
        let usersJson = JSON.stringify(db, null, 4)
        fs.writeFileSync(path.resolve(__dirname, "../data/users.json"), usersJson)
        res.redirect("/login");
        // }
        //  }else{
        //   return res.render ('register', {
        //     errors: resultValidation.mapped(),
        //     oldData: req.body
        //     });

        //  }  




    },
    login: (req, res) => {

        res.render('login');
    },

    processLogin: function (req, res) {
        console.log("form info", req.body)
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync(path.resolve(__dirname, "../data/users.json"), { errors });
            let users;
            let usuarioALoguearse;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].Email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users[i].Password)) {
                        usuarioALoguearse = users[i];
                        break
                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [
                        { msg: 'Credenciales invalidas' }
                    ]
                });
            }
            req.session.usuarioLogueado = usuarioALoguearse;
        } else {
            return res.render('login', { errors: errors.errors });
        }
    },
    loginProcess: (req, res) => {
        let errors = validationResult(req);
        // if (errors.isEmpty()){     
        // return res.render('login', { errors: errors.errors });
        //  } else {
            let userLoginE = req.body.email;
            let userLoginP= req.body.password;
            let userFind = usersDb.filter(user => user.Email == userLoginE && bcrypt.compareSync(userLoginP, user.Password))[0]
            if (userFind != null) {                     
                if (userFind.Role == 1) {
                    delete userFind.Password
                    delete userFind.ConfirmPassword
                    req.session.adminLogged = userFind;
                    res.redirect('/');
                } else {
                    delete userFind.Password
                    delete userFind.ConfirmPassword
                    req.session.userLogged = userFind;
                    res.redirect('/');
                }
            }// else{
            //      return res.render('login', {
            //          errors: [
            //              { msg: 'Credenciales invalidas' }
            //         ]
            //    });
            //  }
         //}
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = userController;