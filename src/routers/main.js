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
router.get('/editProduct', controller.editProduct);


/*** GET ALL PRODUCTS ***/
router.get('/administrador', controller.administrador);

/*** CREATE ONE PRODUCT ***/
router.get('/addProduct', controller.addProduct);
router.post('/',controller.store);


/*** GET ONE PRODUCT ***/



/*** EDIT ONE PRODUCT ***/



// router.put('/administrador/update/:id', upload.single('imagen'), controller.update);


/*** DELETE ONE PRODUCT***/


// router.get('/administrador/delete/:id', controller.delete);





module.exports=router;