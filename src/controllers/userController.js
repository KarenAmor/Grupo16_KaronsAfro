const usersModel = require('../model/users.js');
const { validationResult } = require('express-validator');
const { decodeBase64 } = require('bcryptjs');
const bcrypt = require('bcryptjs');


const userController = {

    /* CREATE USER */

    registro: function (req, res) {
        res.render('register');
    },

    create: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.isEmpty()) {
                let { nombreUsuario, apellidoUsuario, emailUsuario, contraseñaUsuario, confirmacionContraseñaUsuario } = req.body;
                let avatar = req.file;
                let emailToCheck = emailUsuario;
                let existsUser = await usersModel.detail(emailToCheck);
                if (existsUser != null) {
                    res.render('register', {
                        errors: { msg: "Ya existe un usuario registrado con el email ingresado" },
                        oldData: req.body
                    });
                }
                usersModel.createUser(nombreUsuario, apellidoUsuario, emailUsuario, contraseñaUsuario, confirmacionContraseñaUsuario, avatar);
                res.redirect("/login");
            } else {
                return res.render('register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
        } catch (error) {
            res.render('error', { error });
        }
    },

    /* EDIT USER */

    edit: async (req, res) => {
        try {
            let idUser = req.params.id
            let user = await usersModel.editOne(idUser);
            res.render('editUser', { user });
        } catch (error) {
            res.render('error', { error });
        }
    },

    update: async function (req, res) {
        try {
            let id = req.params.id;
            let { nombreUsuario, apellidoUsuario, emailUsuario } = req.body;
            let avatar = req.file;
            await usersModel.update(id, nombreUsuario, apellidoUsuario, emailUsuario, avatar);
            let upSession = await usersModel.detail(emailUsuario);
            res.locals.userLogged = upSession;
            res.redirect('/');
        } catch (error) {
            res.render('error', { error });
        }
    },

    /* DETAIL USER */

    detail: async (req, res) => {
        res.render('detailUser');
    },

    /* LOGIN-LOGOUT PROCESS */

    login: (req, res) => {
        res.render('login');
    },
    loginProcess: async (req, res) => {
        try {
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                let { email, password } = req.body;
                let userFind = await usersModel.access(email);
                if (userFind != null) {
                    if (bcrypt.compareSync(password, userFind.password)) {
                        if (userFind.rol == 1) {
                            req.session.adminLogged = userFind;
                            res.redirect('/');
                        } else {
                            req.session.userLogged = userFind;
                            res.redirect('/');
                        }
                    } else {
                        return res.render('login', {
                            errors: { msg: 'El correo o la contraseña no son válidos. Vuelva a intentarlo.' }
                        });
                    }
                } else {
                    return res.render('login', {
                        errors: { msg: 'El correo o la contraseña no son válidos. Vuelva a intentarlo.' }
                    });
                }
            } else {
                return res.render('login', {
                    errors: errors.mapped()
                });
            }
        } catch (error) {
            res.render('error', { error });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = userController;