const productsModel = require('../model/products');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    home: (req, res) => {
        res.render('home');
    },
    cabello: async (req, res) => {
        try {
            let hair = '10-';
            let hairProducts = await productsModel.findByCategory(hair);
            res.render('cabello', { hairProducts: hairProducts, toThousand });
        } catch (error) {
            res.render('error');
        }
    },
    piel: async (req, res) => {
        try {
            let skin = '11-';
            let skinProducts = await productsModel.findByCategory(skin);
            res.render('piel', { skinProducts: skinProducts, toThousand });
        } catch (error) {
            res.render('error');
        }

    },
    maquillaje: async (req, res) => {
        try {
            let makeup = '12-';
            let makeupProducts = await productsModel.findByCategory(makeup);
            res.render('maquillaje', { makeupProducts: makeupProducts, toThousand });
        } catch (error) {
            res.render('error');
        }

    },
    accesorios: async (req, res) => {
        try {
            let accessories = '13-';
            let accessoriesProducts = await productsModel.findByCategory(accessories);
            res.render('accesorios', { accessories: accessoriesProducts, toThousand });
        } catch (error) {
            res.render('error');
        }

    },
    carritoCompras: (req, res) => {
        res.render('carritoCompras');
    },
    quienesSomos: (req, res) => {
        res.render('quienesSomos');
    },
    getSearch: async (req, res) => {
        try {
            let productToFind = req.body.search.toLowerCase();
            let products = await productsModel.findAll(productToFind);
            res.render('search', { products: products, productToFind, toThousand });
        } catch (error) {
            res.render('error');
        }
    }
}

module.exports = controller;