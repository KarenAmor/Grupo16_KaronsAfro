const express = require("express");
const router = express.Router();
const path = require("path");
const guestMiddleware=require("../middlewares/guestMiddleware");
const userMiddleware=require("../middlewares/userMiddleware");
const multer = require("multer");
const { body } = require("express-validator");

const userController = require("../controllers/userController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/Images/users"));
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
    .withMessage("El campo nombre no puede estar vacío")
    .bail()
    .isLength({min: 2})
    .withMessage("El campo debe ser mínimo dos caracteres"),

  body("apellidoUsuario")
    .notEmpty()
    .withMessage("El campo apellido no puede estar vacío")
    .bail()
    .isLength({min: 2})
    .withMessage("El campo debe ser mínimo dos caracteres"),

  body("emailUsuario")
    .notEmpty()
    .withMessage("Agrega un email")
    .bail()
    .isEmail()
    .withMessage("Agrega un formato de email válido"),

  body("contraseñaUsuario")
    .notEmpty()
    .withMessage("Debes escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener un mínimo de 8 caracteres'),

  body("confirmacionContraseñaUsuario")
    .notEmpty()
    .withMessage("Debes escribir la confirmación de la contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage(
      "La confirmación de la contraseña debe tener también un mínimo de 8 caracteres"
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
    const acceptedExtenssions = [".jpg", ".png", ".jpeg", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen para tu avatar");
    } else {
      const fileExtension = path.extname(file.originalname);
      if (!acceptedExtenssions.includes(fileExtension)) {
        throw new Error(
          "Solo puedes subir archivos en formato .jpg, .jpeg, .png, .gif"
        );
      }
    }
    return true;
  }),
];

const validacionesLogin=[
  body("email")
  .notEmpty()
  .withMessage("Debes colocar un email")
  .bail()
  .isEmail()
  .withMessage('Email inválido. Coloque un correo electrónico válido'),
  body("password")
  .notEmpty()
  .withMessage("Debes escribir tu contraseña")
];

/* CREATE  USER */

router.get("/register", guestMiddleware, userController.registro);

router.post(
  "/register",
  upload.single("avatar"),
  validacionesRegistro,
  userController.create
);

/* LOGIN-LOGOUT*/

router.get('/login', guestMiddleware, userController.login);

router.post('/login', validacionesLogin, userController.loginProcess);

router.get('/logout/', userController.logout);


/* EDIT USER */

router.get('/user/:profile/edit/:id', userMiddleware, userController.edit);

router.put('/user/:profile/edit/:id', upload.single("avatar"), userController.update);

/* DETAIL USER */

router.get('/user/:profile', userMiddleware, userController.detail);

module.exports = router;
