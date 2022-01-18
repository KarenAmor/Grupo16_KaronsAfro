const fs=require('fs');
const path=require('path');
// const productsDb=require('./products.json');
const productsDb=require('../database/models');
const { Op } = require("sequelize");
const { sequelize } = require('../database/models');

const productsModel={

    findAll: async(filter)=>{
        if(filter){
            try {
                return await productsDb.Product.findAll({
                    where: {
                        name: /*{
                            [Op.substring]: filter
                        }*/
                        sequelize.where(sequelize.fn('LOWER',sequelize.col("name")),'LIKE','%'+ filter + '%')
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }else{
           try {
           return await productsDb.Product.findAll();
        } catch (error) {
            console.log(error);
        }    
        }                     
    },
    findByCategory: async(category)=>{
        try {
            return await productsDb.Product.findAll({
                where: {
                    reference: {
                        [Op.startsWith]: category
                    }
                }
            })
        } catch (error) {
            console.log(error);
        }
    },
    create: (name,price,reference,quantity,description,image)=>{
        // let productsDb = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./products.json")));
        // let lastProduct = productsDb.pop();
        // productsDb.push(lastProduct);
        // let newProduct = {
        //     id: lastProduct.id + 1,
        //     Name: name,
        //     Price: parseInt(price),
        //     Reference: reference,
        //     Quantity: parseInt(quantity),
        //     Description: description,
        //     Image: Image.filename
        // }
        // productsDb.push(newProduct);
        // let productJson = JSON.stringify(productsDb, null, 4);
        // fs.writeFileSync(path.resolve(__dirname, "./products.json"), productJson);
        try {
            productsDb.Product.create({
                name: name,
                price: price,
                reference: reference,
                quantity: quantity,
                description: description,
                image: image.filename
            })
        } catch (error) {
            console.log(error);
        }
    },
    findByPk: async(id)=>{
        try {
            let idDetailProduct = await productsDb.Product.findByPk(id) /*filter(items => items.id == id)[0]*/;
            return idDetailProduct;
        } catch (error) {
            console.log(error);
        }        
    },
    editOne: async(id)=>{
        try {
            let product =await productsDb.Product.findByPk(id) /*filter(items => items.id == id)[0]*/;
            return product; 
        } catch (error) {
            console.log(error);
        }        
    },
    update: (id,name,price,reference,quantity,description,image)=>{
        // let productToEdit = productsDb.filter(items => items.id == id)[0];
        // let productsUpdated = productsDb.filter(items => items.id != id);
        // productToEdit = {
        //     id: productToEdit.id,
        //     Name: name,
        //     Price: parseInt(price),
        //     Reference: reference,
        //     Quantity: parseInt(quantity),
        //     Description: description,
        //     Image: productToEdit.Image
        // }
        // productsUpdated.push(productToEdit);
        // let productJson = JSON.stringify(productsUpdated, null, 4);
        // fs.writeFileSync(path.resolve(__dirname, "./products.json"), productJson);
        try {
            productsDb.Product.update({
                name: name,
                price: price,
                reference: reference,
                quantity: quantity,
                description: description,
                image: image ? image.filename : ''
            },{
              where:{id: id} 
            })            
        } catch (error) {
            console.log(error);
        }
    },
    delete: (id)=>{
        // let productDeleted = productsDb.filter(items => items.id != id);
        // let productJson = JSON.stringify(productDeleted, null, 4);
        // fs.writeFileSync(path.resolve(__dirname, "./products.json"), productJson);
        try {
            productsDb.Product.destroy({
                where: {id: id}
            })
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports=productsModel;