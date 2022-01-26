const productsModel = require('../model/products');

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
            let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
            let imagenProducto = req.file;
            productsModel.create(nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto, imagenProducto);
            res.redirect("/administrador");
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
            let product = await productsModel.editOne(idProduct);
            res.render('editProduct', { product });
        } catch (error) {
            res.render('error');
        }
    },
    update: (req, res) => {
        try {
            let id = req.params.id;
            let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
            let imagenProducto = req.file;
            productsModel.update(id, nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto, imagenProducto);
            res.redirect("/administrador");
        } catch (error) {
            res.render('error');
        }
    },

    /*** DELETE ONE PRODUCT***/

    delete: (req, res) => {
        try {
            let id = req.params.id
            productsModel.delete(id);
            res.redirect("/administrador");
        } catch (error) {
            res.render('error');
        }
    }
}

module.exports = producstController;