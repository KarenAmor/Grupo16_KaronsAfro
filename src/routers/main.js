const controller = require("../controllers/mainController")

const express = require('express');
const router = express.Router();


router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/cabello', controller.cabello);
router.get('/piel', controller.piel);
router.get('/maquillaje', controller.maquillaje);
router.get('/accesorios', controller.accesorios);
router.get('/register', controller.register);
router.get('/carrito_compras', controller.carritoCompras);
router.get('/quienesSomos', controller.quienesSomos);
router.get('/administrador', controller.administrador);
router.get('/addProduct', controller.addProduct);
router.post('/',controller.store);
router.get('/editProduct', controller.editProduct);










module.exports=router;