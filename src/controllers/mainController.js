// const path = require ('path');
// const fs=require('fs');

const controller = {

    home: (req, res) => {
        // res.sendFile(path.resolve(__dirname, '../views/home.html'));
        res.render('home')
    },
    cabello: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/cabello.html"))
        res.render('cabello')
    },
    piel: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/piel.html"))
        res.render('piel')
    },
    maquillaje: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/maquillaje.html"))
        res.render('maquillaje')
    },
    accesorios: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        res.render('accesorios')
    },
    carritoCompras: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/carritoCompras.html"))
        res.render('carritoCompras')
    },
    quienesSomos: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/quienesSomos.html"))
        res.render('quienesSomos')
    }
}

module.exports = controller;