const express = require("express");
const router = express.Router();
const apiProductController = require('../../controllers/controllerApi/apiProductController')

router.get('/api/products',apiProductController.list)
router.get('/api/products/:id',apiProductController.getById)

module.exports = router;