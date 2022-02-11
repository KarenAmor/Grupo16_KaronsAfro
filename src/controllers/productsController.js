const productsModel = require('../model/products');
const { validationResult } = require('express-validator');

const producstController = {

    /*** GET ALL PRODUCTS ***/

    administrador: async (req, res) => {
        try {
            let allProducts = await productsModel.findAll();
            res.render('administrador', { productos: allProducts });
        } catch (error) {
            res.render('error');
        }
    },

    /*** CREATE ONE PRODUCT ***/

    addProduct: (req, res) => {
        res.render('addProduct');
    },
    store: (req, res) => {
        try {
            let resultValidation = validationResult(req);
            if (resultValidation.isEmpty()) {
                let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
                let imagenProducto = req.file;
                productsModel.createProduct(nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto, imagenProducto);
                res.redirect("/administrador");
            } else {
                return res.render('addProduct', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
        } catch (error) {
            res.render('error');
        }
    },

    /*** GET ONE PRODUCT ***/

    detail: async (req, res) => {
        try {
            let detailProduct = req.params.id;
            let idDetailProduct = await productsModel.findByPk(detailProduct);
            res.render('detail', { idDetailProduct });
        } catch (error) {
            res.render('error');
        }
    },

    /*** EDIT ONE PRODUCT ***/

    editProduct: async (req, res) => {
        try {
            let idProduct = req.params.id
            let product = await productsModel.editOneProduct(idProduct);
            res.render('editProduct', { product });
        } catch (error) {
            res.render('error');
        }
    },
    update: async(req, res) => {
        try {
            let resultValidation = validationResult(req);
            let idProduct = req.params.id;
            let product = await productsModel.editOneProduct(idProduct);
            if (resultValidation.isEmpty()) {                                
                let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
                let imagenProducto = req.file;
                productsModel.updateProduct(idProduct, nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto, imagenProducto);
                res.redirect("/administrador");
            } else {
                return res.render('editProduct', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    product
                });
            }
        } catch (error) {
            res.render('error');
        }
    },

    /*** DELETE ONE PRODUCT***/

    delete: (req, res) => {
        try {
            let id = req.params.id
            productsModel.deleteProduct(id);
            res.redirect("/administrador");
        } catch (error) {
            res.render('error');
        }
    }
}

module.exports = producstController;