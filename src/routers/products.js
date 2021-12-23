const express = require('express');
const router = express.Router();
const adminMiddleware=require("../middlewares/adminMiddleware");

const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/administrador', adminMiddleware, productsController.administrador);

/*** CREATE ONE PRODUCT ***/
router.get('/administrador/addProduct', adminMiddleware, productsController.addProduct);
router.post('/administrador',productsController.store);


/*** GET ONE PRODUCT ***/

router.get('/producto/detail/:id', adminMiddleware, productsController.detail);


/*** EDIT ONE PRODUCT ***/
router.get('/administrador/editProduct/:id', adminMiddleware, productsController.editProduct);
router.put('/administrador/editProduct/:id',productsController.update)


// router.put('/administrador/update/:id', upload.single('imagen'), controller.update);


/*** DELETE ONE PRODUCT***/
router.delete("/administrador/delete/:id",productsController.delete)


module.exports = router;