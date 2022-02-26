const productsDb = require('../database/models');
const { Op } = require("sequelize");
const { sequelize } = require('../database/models');

const productsModel = {

    findAll: async (filter) => {
        if (filter) {
            try {
                return await productsDb.Product.findAll({
                    where: {
                        name: sequelize.where(sequelize.fn('LOWER', sequelize.col("name")), 'LIKE', '%' + filter + '%')
                    }
                })
            } catch (err) {
                // console.log(err);
                return new error
            }
        } else {
            try {
                return await productsDb.Product.findAll();
            } catch (err) {
                // console.log(err);
                return new error
            }
        }
    },
    findByCategory: async (category) => {
        try {
            return await productsDb.Product.findAll({
                where: {
                    reference: {
                        [Op.startsWith]: category
                    }
                }
            })
        } catch (err) {
            // console.log(err);
            return new error
        }
    },
    createProduct: (name, price, reference, quantity, description, image) => {
        try {
            productsDb.Product.create({
                name: name,
                price: price,
                reference: reference,
                quantity: quantity,
                description: description,
                image: image.filename
            })
        } catch (err) {
            // console.log(err);
            return new error
        }
    },
    findByPk: async (id) => {
        try {
            let idDetailProduct = await productsDb.Product.findByPk(id);
            return idDetailProduct;
        } catch (err) {
            // console.log(err);
            return new error
        }
    },
    editOneProduct: async (id) => {
        try {
            let product = await productsDb.Product.findByPk(id);
            return product;
        } catch (err) {
            // console.log(err);
            return new error
        }
    },
    updateProduct: (id, name, price, reference, quantity, description, image) => {
        try {
            productsDb.Product.update({
                name: name,
                price: price,
                reference: reference,
                quantity: quantity,
                description: description,
                image: image
            }, {
                where: { id: id }
            })
        } catch (err) {
            // console.log(err);
            return new error
        }
    },
    deleteProduct: (id) => {
        try {
            productsDb.Product.destroy({
                where: { id: id }
            })
        } catch (err) {
            // console.log(err);
            return new error
        }
    }
}

module.exports = productsModel;