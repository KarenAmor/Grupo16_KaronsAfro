// const path = require ('path');
// const fs=require('fs');
const productsModel = require('../model/products');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    home: (req, res) => {
        // res.sendFile(path.resolve(__dirname, '../views/home.html'));
        res.render('home');
    },
    cabello: async (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/cabello.html"))
        try {
            let hair='10-';
            let hairProducts= await productsModel.findByCategory(hair)/*.filter(item=>item.reference.slice(1,2)==0)*/;
            res.render('cabello',{hairProducts: hairProducts, toThousand});
        } catch (error) {
            console.log(error);
        }        
    },
    piel: async(req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/piel.html"))
        try {
            let skin='11-';
            let skinProducts=await productsModel.findByCategory(skin)/*.filter(item=>item.Reference.slice(1,2)==1)*/;
            res.render('piel',{skinProducts: skinProducts, toThousand});
        } catch (error) {
            console.log(error);
        }
        
    },
    maquillaje: async(req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/maquillaje.html"))
        try {
            let makeup='12-';
            let makeupProducts=await productsModel.findByCategory(makeup)/*.filter(item=>item.Reference.slice(1,2)==2)*/;
            res.render('maquillaje',{makeupProducts: makeupProducts, toThousand});
        } catch (error) {
            console.log(error);
        }
        
    },
    accesorios: async (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        try {
            let accessories='13-';
            let accessoriesProducts= await productsModel.findByCategory(accessories)/*.filter(item=>item.Reference.slice(1,2)==3)*/;
            res.render('accesorios', {accessories: accessoriesProducts, toThousand});          
        } catch (error) {
            console.log(error);
        }
        
    },
    carritoCompras: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/carritoCompras.html"))
        res.render('carritoCompras');
    },
    quienesSomos: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/quienesSomos.html"))
        res.render('quienesSomos');
    },
    getSearch: async(req,res)=>{
        try {
            let productToFind=req.body.search.toLowerCase();
            let products=await productsModel.findAll(productToFind)/*.filter(item=>item.Name==productToFind)*/;
            res.render('search',{products: products, productToFind, toThousand});
        } catch (error) {
            console.log(error);
        }        
    }
}

module.exports = controller;