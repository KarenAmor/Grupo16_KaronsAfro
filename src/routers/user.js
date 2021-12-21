const express = require("express");
const router = express.Router();
const path = require("path");
const guestMiddleware=require("../middlewares/guestMiddleware")
const adminMiddleware=require("../middlewares/adminMiddleware")

const bcrypt = require("bcryptjs");
const fs = require("fs");
const multer = require("multer");
const { body } = require("express-validator");

const userController = require("../controllers/userController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/users"));
  },
  filename: function (req, file, cb) {
    cb(null, "foto" + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//Validaciones del Registro

const validacionesRegistro = [
  body("nombreUsuario")
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacío"),

  body("apellidoUsuario")
    .notEmpty()
    .withMessage("El campo apellido no puede estar vacío"),

  body("emailUsuario")
    .notEmpty()
    .withMessage("Agrega un email")
    .bail()
    .isEmail()
    .withMessage("Agrega un formato de email valido"),

  body("contraseñaUsuario")
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener un mínimo de 8 caractéres'),

  body("confirmacionContraseñaUsuario")
    .isLength({ min: 8 })
    .withMessage(
      "La confirmación de la contraseña debe tener un mínimo de 8 caractéres"
    ),

  body("confirmacionContraseñaUsuario")
    .custom((value, { req }) => {
      if (req.body.contraseñaUsuario == value) {
        return true; // Si yo retorno un true  no se muestra el error
      } else {
        return false; // Si retorno un false si se muestra el error
      }
    })
    .withMessage("Las contraseñas deben ser iguales"),

  body("avatar").custom((value, { req }) => {
    const file = req.file;
    const acceptedExtenssions = [".jpg", ".png", ".jpeg"];

    if (!file) {
      throw new Error("Tienes que subir una imagen para tu avatar");
    } else {
      const fileExtension = path.extname(file.originalname);
      if (!acceptedExtenssions.includes(fileExtension)) {
        throw new Error(
          "Solo puedes subir archivos en formato .jpg, .jpeg, .png"
        );
      }
    }
    return true;
  }),
];

router.get("/register", guestMiddleware, userController.registro);

router.post(
  "/register",
  upload.single("avatar"),
  validacionesRegistro,
  userController.create
);
router.get('/login', guestMiddleware, userController.login);

router.post('/login', [
    body('email').isEmail().withMessage('Email invalido'),
    body('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres')
],userController.loginProcess);

// router.post('/login', controller.loginProcess);
router.get('/logout/', userController.logout);

module.exports = router;
