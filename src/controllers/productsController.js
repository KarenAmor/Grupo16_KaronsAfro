const productsModel = require('../model/products');

const producstController = {

    /*** GET ALL PRODUCTS ***/

    administrador: async (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/administrador.html"))
        // res.render('administrador')
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        try {
            let allProducts = await productsModel.findAll();
            res.render('administrador', { productos: allProducts });
        } catch (error) {
            console.log(error);
        }        
    },

    /*** CREATE ONE PRODUCT ***/

    addProduct: (req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/addProduct.html"))
        // res.render('addProduct')
        res.render('addProduct');
    },
    store: (req, res) => {
        let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
        let imagenProducto=req.file;
        productsModel.create(nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto, imagenProducto);        
        res.redirect("/administrador");
    },

    /*** GET ONE PRODUCT ***/

    detail: async(req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        try {
            let detailProduct = req.params.id;
            let idDetailProduct = await productsModel.findByPk(detailProduct);
            res.render('detail', { idDetailProduct }); 
        } catch (error) {
            console.log(error);
        }        
    },

    /*** EDIT ONE PRODUCT ***/

    editProduct: async(req, res) => {
        // res.sendFile(path.resolve(__dirname, "../views/editProduct.html"))
        try {
            let idProduct = req.params.id
            let product = await productsModel.editOne(idProduct);
            res.render('editProduct', { product });  
        } catch (error) {
            console.log(error);
        }        
    },
    update: (req, res) => {
        let id = req.params.id;
        let { nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto } = req.body;
        let imagenProducto=req.file;
        productsModel.update(id, nombreProducto, precioProducto, referenciaProducto, cantidadProducto, descripcionProducto, imagenProducto);
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