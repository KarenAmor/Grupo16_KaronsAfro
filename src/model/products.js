const fs=require('fs');
const path=require('path');
const productsDb=require('./products.json');

const productsModel={

    findAll: ()=>{
        return productsDb;
    },
    create: (name,price,reference,quantity,description)=>{
        let productsDb = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./products.json")));
        let lastProduct = productsDb.pop();
        productsDb.push(lastProduct);
        let newProduct = {
            id: lastProduct.id + 1,
            Name: name,
            Price: parseInt(price),
            Reference: reference,
            Quantity: parseInt(quantity),
            Description: description,
            Image: "https://www.universia.net/etc.clientlibs/universia/clientlibs/clientlib-angular/resources/assets/img/default-image.png"
        }
        productsDb.push(newProduct);
        let productJson = JSON.stringify(productsDb, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "./products.json"), productJson);
    },
    findByPk: (id)=>{
        let idDetailProduct = productsDb.filter(items => items.id == id)[0];
        return idDetailProduct;
    },
    editOne: (id)=>{
        let product = productsDb.filter(items => items.id == id)[0];
        return product;
    },
    update: (id,name,price,reference,quantity,description)=>{
        let productToEdit = productsDb.filter(items => items.id == id)[0];
        let productsUpdated = productsDb.filter(items => items.id != id);
        productToEdit = {
            id: productToEdit.id,
            Name: name,
            Price: parseInt(price),
            Reference: reference,
            Quantity: parseInt(quantity),
            Description: description,
            Image: productToEdit.Image
        }
        productsUpdated.push(productToEdit);
        let productJson = JSON.stringify(productsUpdated, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "./products.json"), productJson);
    },
    delete: (id)=>{
        let productDeleted = productsDb.filter(items => items.id != id);
        let productJson = JSON.stringify(productDeleted, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "./products.json"), productJson);
    }
}

module.exports=productsModel;