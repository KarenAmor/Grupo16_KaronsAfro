const usersModel = require('../model/users.js');

const { validationResult } = require('express-validator');
const { decodeBase64 } = require('bcryptjs');


const userController = {

    /* CREATE USER */

    registro: function (req, res) {
        res.render('register');
    },

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

    /* EDIT USER */

    edit: async(req, res) => {

        try {
            let idUser = req.params.id
            let user = await usersModel.editOne(idUser);
            res.render('editUser', { user });  
        } catch (error) {
            console.log(error);
        }        
       
    },

    update: function (req,res) {
        let id = req.params.id;
        let { nombreUsuario, apellidoUsuario, emailUsuario, contraseñaUsuario, confirmacionContraseñaUsuario } = req.body;
        let avatar = req.file;
        usersModel.update(id, nombreUsuario, apellidoUsuario, emailUsuario, contraseñaUsuario, confirmacionContraseñaUsuario, avatar);
        res.redirect("/user" + req.params.id);        

    },

    /* DETAIL USER */

    detail: async(req, res) => {
        try {
            let detailUser = req.params.id;
            let idDetailUser = await usersModel.findByPk(detailUser);
            res.render('detailUser', { idDetailUser }); 
        } catch (error) {
            console.log(error);
        }        

    },

    /* LOGIN-LOGOUT PROCESS */

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