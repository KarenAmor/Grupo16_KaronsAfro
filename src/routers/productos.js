
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productosController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.home); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productosController.create); 
router.post('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;