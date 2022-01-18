const express = require('express');
const router = express.Router();
const path = require("path");
const adminMiddleware=require("../middlewares/adminMiddleware");
const multer = require("multer");

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

/*** GET ALL PRODUCTS ***/
router.get('/administrador', adminMiddleware, productsController.administrador);

/*** CREATE ONE PRODUCT ***/
router.get('/administrador/addProduct', adminMiddleware, productsController.addProduct);
router.post('/administrador', upload.single("imagenProducto"), productsController.store);


/*** GET ONE PRODUCT ***/

router.get('/producto/detail/:id', adminMiddleware, productsController.detail);


/*** EDIT ONE PRODUCT ***/
router.get('/administrador/editProduct/:id', adminMiddleware, productsController.editProduct);
router.put('/administrador/editProduct/:id', upload.single("imagenProducto"), productsController.update)


// router.put('/administrador/update/:id', upload.single('imagen'), controller.update);


/*** DELETE ONE PRODUCT***/
router.delete("/administrador/delete/:id",productsController.delete);


module.exports = router;