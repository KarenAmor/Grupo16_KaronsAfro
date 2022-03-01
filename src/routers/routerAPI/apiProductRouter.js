const express = require("express");
const router = express.Router();
const apiProductController = require('../../controllers/controllerApi/apiProductController')

router.get('/api/products',apiProductController.list)
router.get('/api/products/:id',apiProductController.getById)
router.get('/api/products-in-categories',apiProductController.getTotalProductsInCategories);
router.get('/api/lastproduct',apiProductController.newProduct);

module.exports = router;