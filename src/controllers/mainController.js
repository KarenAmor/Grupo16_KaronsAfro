// const path = require ('path');
// const fs=require('fs');
const productsModel = require('../model/products');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    home: (req, res) => {
        // res.sendFile(path.resolve(__dirname, '../views/home.html'));
        res.render('home');
    },
    cabello: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/cabello.html"))
        let hairProducts=productsModel.findAll().filter(item=>item.Reference.slice(1,2)==0);
        res.render('cabello',{hairProducts: hairProducts, toThousand});
    },
    piel: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/piel.html"))
        let skinProducts=productsModel.findAll().filter(item=>item.Reference.slice(1,2)==1);
        res.render('piel',{skinProducts: skinProducts, toThousand});
    },
    maquillaje: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/maquillaje.html"))
        let makeupProducts=productsModel.findAll().filter(item=>item.Reference.slice(1,2)==2);
        res.render('maquillaje',{makeupProducts: makeupProducts, toThousand});
    },
    accesorios: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        let accessories=productsModel.findAll().filter(item=>item.Reference.slice(1,2)==3);
        res.render('accesorios', {accessories: accessories, toThousand});
    },
    carritoCompras: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/carritoCompras.html"))
        res.render('carritoCompras');
    },
    quienesSomos: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/quienesSomos.html"))
        res.render('quienesSomos');
    },
    getSearch: (req,res)=>{
        let productToFind=req.body.search;
        let products=productsModel.findAll().filter(item=>item.Name==productToFind);
        res.render('search',{products: products, productToFind, toThousand});
    }
}

module.exports = controller;