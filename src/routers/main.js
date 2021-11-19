const controller = require("../controllers/mainController")

const express = require('express');
const router = express.Router();


router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/producto/cabello', controller.cabello);
router.get('/producto/piel', controller.piel);
router.get('/producto/maquillaje', controller.maquillaje);
router.get('/producto/accesorios', controller.accesorios);
router.get('/register', controller.register);
router.get('/carrito_compras', controller.carritoCompras);
router.get('/quienesSomos', controller.quienesSomos);
router.get('/editProduct', controller.editProduct);


/*** GET ALL PRODUCTS ***/
router.get('/administrador', controller.administrador);

/*** CREATE ONE PRODUCT ***/
router.get('/administrador/addProduct', controller.addProduct);
router.post('/administrador',controller.store);


/*** GET ONE PRODUCT ***/



/*** EDIT ONE PRODUCT ***/
router.put('/administrador/editProduct',controller.update)


// router.put('/administrador/update/:id', upload.single('imagen'), controller.update);


/*** DELETE ONE PRODUCT***/
router.delete("/administrador/delete",controller.delete)

// router.get('/administrador/delete/:id', controller.delete);





module.exports=router;