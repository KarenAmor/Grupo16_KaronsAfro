const express = require('express');
const router = express.Router();
const path = require("path");
const adminMiddleware = require("../middlewares/adminMiddleware");
const multer = require("multer");
const { body } = require("express-validator");

const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/products"));
  },
  filename: function (req, file, cb) {
    cb(null, "producto" + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Validaciones del registro   

const validacionesRegistro = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("Debes colocar el nombre del producto a registar")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre del producto debe tener al menos cinco caracteres"),

  body("precioProducto")
    .notEmpty()
    .withMessage("Debes colocar el precio del producto")
    .bail()
    .isNumeric()
    .withMessage("Debes colocar valores númericos"),

  body("referenciaProducto")
    .notEmpty()
    .withMessage("Debes colocar la referencia del producto"),

  body("cantidadProducto")
    .notEmpty()
    .withMessage("Debes colocar la cantidad del producto en existencia")
    .bail()
    .isNumeric()
    .withMessage("Debes colocar valores númericos"),

  body("descripcionProducto")
    .isLength({ min: 20 })
    .withMessage("La descripción del producto debe tener al menos veinte caracteres"),

  body("imagenProducto").custom((value, { req }) => {
    const file = req.file;
    const acceptedExtenssions = [".jpg", ".png", ".jpeg", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen para el producto");
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
]

/*** GET ALL PRODUCTS ***/
router.get('/administrador', adminMiddleware, productsController.administrador);

/*** CREATE ONE PRODUCT ***/
router.get('/administrador/addProduct', adminMiddleware, productsController.addProduct);
router.post('/administrador/addProduct',
  upload.single("imagenProducto"),
  validacionesRegistro,
  productsController.store);

/*** GET ONE PRODUCT ***/

router.get('/producto/detail/:id', adminMiddleware, productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/administrador/editProduct/:id', adminMiddleware, productsController.editProduct);
router.put('/administrador/editProduct/:id', 
  upload.single("imagenProducto"), 
  validacionesRegistro, 
  productsController.update)

/*** DELETE ONE PRODUCT***/
router.delete("/administrador/delete/:id", productsController.delete);

module.exports = router;