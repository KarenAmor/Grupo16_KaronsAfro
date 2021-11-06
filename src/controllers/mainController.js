const path = require ('path');

const controller ={

    home: (req, res)=>{
        // res.sendFile(path.resolve(__dirname, '../views/home.html'));
        res.render('home')
    },
    login: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/login.html"))
        res.render('login')
    },
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
    register: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/register.html"))
        res.render('register')

    },
    carritoCompras: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/carritoCompras.html"))
        res.render('carritoCompras')

    },
    quienesSomos: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/quienesSomos.html"))
        res.render('quienesSomos')

    },
    administrador: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/administrador.html"))
        res.render('administrador')

    },
    addProduct: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/addProduct.html"))
        res.render('addProduct')

    },
    editProduct: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/editProduct.html"))
        res.render('editProduct')

    },  



}

module.exports= controller