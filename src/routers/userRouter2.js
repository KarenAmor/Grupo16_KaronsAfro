const express = require('express');
const { check } = require('express-validator');
const multer = require('multer');
const path = require('path');
const router= express.Router();



const usersController = require('../controllers/usersController2');


router.get('/', usersController.login);

router.post('/', [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe terner minimo 8 caracteres')
],usersController.processLogin);


module.exports = router;