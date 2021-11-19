const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    home: (req, res)=>{
        res.render('home')
    },
    detail: (req, res) => {
		res.render('detail');
	},
    administrador: (req,res)=>{
        res.render('administrador')

    },
    addProduct: (req,res)=>{
        res.render('addProduct')

    },
    store: (req,res)=>{
        res.redirect("/administrador")
    },
    editProduct: (req,res)=>{
        res.render('editProduct')

    },  
    update: (req, res) => {
		// Do the magic
	},



}

module.exports= controller