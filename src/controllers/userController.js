const usersModel = require('../model/users.js');

const { validationResult } = require('express-validator');
const { decodeBase64 } = require('bcryptjs');

const db = require("../database/models/User");

const userController = {

    registro: function (req, res) {
        res.render('register');
    },

    // CREATE USER //

    create: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.isEmpty()) {
            let { nombreUsuario, apellidoUsuario, emailUsuario, contraseñaUsuario, confirmacionContraseñaUsuario } = req.body;
            let avatar = req.file;
            usersModel.create(nombreUsuario, apellidoUsuario, emailUsuario, contraseñaUsuario, confirmacionContraseñaUsuario, avatar);
            res.redirect("/login");
        } else {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    },

    edit: function (req,res) {

        db.User.findByPk (req.params.id)
        .then (function(user){
            res.render ("editUser", {user:user})
        })       
       
    },

    update: function (req,res) {
        db.User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            avatar: req.body.avatar,

        },{
            where: {
                id: req.params.id
            }
        }) 
        res.direct("/user/" + req.params.id)

    },

    detail: function (req, res){
        db.User.findByPk(req.params.id)
        .then (function(user){
            res.render("userDetail", {user:user})
        })

    },

    login: (req, res) => {
        res.render('login');
    },
    // processLogin: function (req, res) {
    //     console.log("form info", req.body)
    //     let errors = validationResult(req);
    //     if (errors.isEmpty()) {
    //         let usersJSON = fs.readFileSync(path.resolve(__dirname, "../data/users.json"), { errors });
    //         let users;
    //         let usuarioALoguearse;
    //         if (usersJSON == "") {
    //             users = [];
    //         } else {
    //             users = JSON.parse(usersJSON);
    //         }
    //         for (let i = 0; i < users.length; i++) {
    //             if (users[i].Email == req.body.email) {
    //                 if (bcrypt.compareSync(req.body.password, users[i].Password)) {
    //                     usuarioALoguearse = users[i];
    //                     break
    //                 }
    //             }
    //         }
    //         if (usuarioALoguearse == undefined) {
    //             return res.render('login', {
    //                 errors: [
    //                     { msg: 'Credenciales invalidas' }
    //                 ]
    //             });
    //         }
    //         req.session.usuarioLogueado = usuarioALoguearse;
    //     } else {
    //         return res.render('login', { errors: errors.errors });
    //     }
    // },
    loginProcess: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { email, password } = req.body;
            let userFind = usersModel.access(email, password);
            if (userFind != undefined) {
                if (userFind.Role == 1) {
                    userFind.Password
                    userFind.ConfirmPassword
                    req.session.adminLogged = userFind;
                    res.redirect('/');
                } else {
                    req.session.userLogged = userFind;
                    res.redirect('/');
                }
            }
        } else {
            return res.render('login', {
                errors: [
                    { msg: 'Credenciales invalidas' }
                ]
            });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = userController;