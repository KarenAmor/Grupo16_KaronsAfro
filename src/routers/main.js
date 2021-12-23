const controller = require("../controllers/mainController")

const express = require('express');
const router = express.Router();


router.get('/', controller.home);
//router.get('/login', controller.login);

router.get('/producto/cabello', controller.cabello);
router.get('/producto/piel', controller.piel);
router.get('/producto/maquillaje', controller.maquillaje);
router.get('/producto/accesorios', controller.accesorios);

// router.get('/register', controller.register);
router.get('/carrito_compras', controller.carritoCompras);
router.get('/quienesSomos', controller.quienesSomos);
// router.get('/editProduct/:id', controller.editProduct);
// router.get('/administrador/delete/:id', controller.delete);

module.exports=router;