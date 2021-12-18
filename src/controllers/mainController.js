const path = require ('path');
const fs=require('fs');
const productsDb=require('../data/products.json')

const controller ={

    home: (req, res)=>{
        // res.sendFile(path.resolve(__dirname, '../views/home.html'));
        res.render('home')
    },


   /*login: (req,res)=>{
        res.render('login')
    },*/


    cabello: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/cabello.html"))
        res.render('cabello')

    },


    piel: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/piel.html"))
        res.render('piel')

    },


    maquillaje: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/maquillaje.html"))
        res.render('maquillaje')

    },


    accesorios: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        res.render('accesorios')

    },


    /*register: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/register.html"))
        res.render('register')

    },*/


    carritoCompras: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/carritoCompras.html"))
        res.render('carritoCompras')

    },


    quienesSomos: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/quienesSomos.html"))
        res.render('quienesSomos')

    },

/*** GET ALL PRODUCTS ***/

    administrador: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/administrador.html"))
        // res.render('administrador')
        // let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/administrador'), { productos: productsDb });
    },
  
/*** CREATE ONE PRODUCT ***/

    addProduct: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/addProduct.html"))
        // res.render('addProduct')
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/addProduct'));

    },
    

    store: (req,res)=>{
        //TODO agregar la logica dentro de model
        let db=JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data/products.json")))
        let lastProduct=db.pop()
        db.push(lastProduct)
        let newProduct={
            id: lastProduct.id+1,
            Name: req.body.nombreProducto,
            Price: parseInt(req.body.precioProducto),
            Reference: req.body.referenciaProducto,
            Quantity: parseInt(req.body.cantidadProducto),
            Description: req.body.descripcionProducto,
            Image: "https://www.universia.net/etc.clientlibs/universia/clientlibs/clientlib-angular/resources/assets/img/default-image.png"
        }
        db.push(newProduct)
        let productJson=JSON.stringify(db,null,4)
        fs.writeFileSync(path.resolve(__dirname,"../data/products.json"),productJson)
        res.redirect("/administrador")
    },

/*** GET ONE PRODUCT ***/

    detail: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/accesorios.html"))
        const detailProduct = req.params.id
        const idDetailProduct = productsDb.filter(items=>items.id==detailProduct)[0]
        res.render('detail', {idDetailProduct})               

    },

/*** EDIT ONE PRODUCT ***/


    editProduct: (req,res)=>{
    // res.sendFile(path.resolve(__dirname, "../views/editProduct.html"))
        const idProduct=req.params.id
        const product=productsDb.filter(items=>items.id==idProduct)[0]
        res.render('editProduct',{product})
    },  

    update: (req,res) =>{
        let id=req.params.id
        let productToEdit=productsDb.filter(items=>items.id==id)[0]
        let productsUpdated=productsDb.filter(items=>items.id!=id)
        productToEdit={
            id: productToEdit.id,
            Name: req.body.nombreProducto,
            Price: parseInt(req.body.precioProducto),
            Reference: req.body.referenciaProducto,
            Quantity: parseInt(req.body.cantidadProducto),
            Description: req.body.descripcionProducto,
            Image: productToEdit.Image
        }
        productsUpdated.push(productToEdit)
        let productJson=JSON.stringify(productsUpdated,null,4)
        fs.writeFileSync(path.resolve(__dirname,"../data/products.json"),productJson)
        res.redirect("/administrador")
    },

/*** DELETE ONE PRODUCT***/
    delete: (req,res)=>{        
        let id=req.params.id
        let productDeleted=productsDb.filter(items=>items.id!=id)
        let productJson=JSON.stringify(productDeleted,null,4)
        fs.writeFileSync(path.resolve(__dirname,"../data/products.json"),productJson)
        res.redirect("/administrador")
    }
}

module.exports= controller