const productsModel = require('../model/products');

const producstController = {

    /*** GET ALL PRODUCTS ***/

    administrador: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/administrador.html"))
        // res.render('administrador')
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let allProducts = productsModel.findAll();
        res.render('administrador', { productos: allProducts });
    },

    /*** CREATE ONE PRODUCT ***/

    addProduct: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/addProduct.html"))
        // res.render('addProduct')
        res.render('addProduct');
    },
    store: (req, res) => {
        let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
        productsModel.create(nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto);
        res.redirect("/administrador");
    },

    /*** GET ONE PRODUCT ***/

    detail: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        let detailProduct = req.params.id;
        let idDetailProduct = productsModel.findByPk(detailProduct);
        res.render('detail', { idDetailProduct });
    },

    /*** EDIT ONE PRODUCT ***/

    editProduct: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/editProduct.html"))
        let idProduct = req.params.id
        let product = productsModel.editOne(idProduct);
        res.render('editProduct', { product });
    },
    update: (req, res) => {
        let id = req.params.id;
        let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
        productsModel.update(id, nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto);
        res.redirect("/administrador");
    },

    /*** DELETE ONE PRODUCT***/

    delete: (req, res) => {
        let id = req.params.id
        productsModel.delete(id);
        res.redirect("/administrador");
    }
}

module.exports = producstController;