const express = require("express");
const router = express.Router();
const apiUserController = require('../../controllers/controllerApi/apiUserController')

router.get('/api/users',apiUserController.list)
router.get('/api/users/:id',apiUserController.getById)

module.exports = router;