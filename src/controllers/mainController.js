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

/*** GET ALL PRODUCTS ***/

    administrador: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/administrador.html"))
        // res.render('administrador')
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/administrador'), {productos});
    },
  
/*** CREATE ONE PRODUCT ***/

    addProduct: (req,res)=>{
        // res.sendFile(path.resolve(__dirname, "../views/addProduct.html"))
        // res.render('addProduct')
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/addProduct'));

    },
    

    store: (req,res)=>{
        res.redirect("/administrador")
    },


 

/*** EDIT ONE PRODUCT ***/


    editProduct: (req,res)=>{
    // res.sendFile(path.resolve(__dirname, "../views/editProduct.html"))
        res.render('editProduct')

    },  

    // update: (req,res) =>{
    //     const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
    //     req.body.id = req.params.id;
    //     req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
    //     const productosUpdate = productos.map(productos =>{
    //         if(productos.id == req.body.id){
    //             return productos = req.body;
    //         }
    //         return productos;
    //     })
    //     const productosActualizar = JSON.stringify(productosUpdate,null,4);
    //     fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),productosActualizar)
    //     res.redirect(`/administrador/update/${id}`);
    // },

/*** DELETE ONE PRODUCT***/

    // delete : (req, res) => {
    // const id = req.params.id;
    // const productosUpdated = productos.filter(productos => productos.id != id)

    // let jsonProductos = JSON.stringify(productosUpdated, null, 4);
    // fs.writeFileSync(productosFilePath, jsonProductos)
    
    // res.redirect('/')
    // },


}

module.exports= controller