const productModel = require('../../database/models');
const { Op } = require("sequelize");

const apiProductController = {
    'getById': async (req, res) => {
        try {
            const id = req.params.id
            let product = await productModel.Product.findOne({
                where: {
                    id: id
                }
            })
            const subset = (({ id, name, price, reference, quantity, description, image }) => ({ id, name, price, reference, quantity, description, image }))(product.dataValues)
            res.json({
                status: 200,
                ...subset
            })
        } catch (error) {
            // console.error(error)
            res.json({
                status: 400,
                messague: error.messague || "product doesn't exist or bad connection"
            })
        }
    },
    'list': async (req, res) => {
        try {
            let products = await productModel.Product.findAll()
            let registerProducts = []
            products.forEach(product => {
                // put the filter logic here
                const productValue = product.dataValues
                registerProducts.push(productValue)
            });
            
            res.json({
                status: 200,
                count: registerProducts.length,
                products: registerProducts,
                url: 'api/products'
            }
            )
        } catch (error) {
            // console.error(error)
            res.json({
                status: 500,
                messague: error.messague || "bad server connection"
            })
        }

    },
    getTotalProductsInCategories: async(req,res)=>{
        const hair = '10-';
        const skin = '11-';
        const makeup = '12-';
        const accessories = '13-';
        try {
            let hairProducts = await productModel.Product.findAll({
                where: {
                    reference: {
                        [Op.startsWith]: hair
                    }
                }
            })

            let skinProducts = await productModel.Product.findAll({
                where: {
                    reference: {
                        [Op.startsWith]: skin
                    }
                }
            })

            let makeUpProducts = await productModel.Product.findAll({
                where: {
                    reference: {
                        [Op.startsWith]: makeup
                    }
                }
            })

            let accessoriesProducts = await productModel.Product.findAll({
                where: {
                    reference: {
                        [Op.startsWith]: accessories
                    }
                }
            })                   
            
            res.json({
                status: 200,
                totalProductsInHair: hairProducts.length,
                totalProductsInSkin: skinProducts.length,
                totalProductsInMakeUp: makeUpProducts.length,
                totalProductsInAccessories: accessoriesProducts.length,
                url: "api/products-in-categories"
            })
        } catch (error) {
            // console.log(error);
            res.json({
                status: 500,
                messague: error.messague || "bad server connection"
            })
        }
    },
    newProduct: async(req,res)=>{
        try {
            let newProduct=await productModel.Product.findOne({
                order: [
                    ['id','DESC']
                ]
            })
            res.json({
                status: 200,
                metaData:{
                    newProduct: {
                        name: newProduct.name,
                        description: newProduct.description,
                        image: "https://grupo16-karonsafro.herokuapp.com/Images/products/"+newProduct.image
                    }
                }                
            })
        } catch (error) {
            // console.log(error);
            res.json({
                status: 500,
                messague: error.messague || "bad server connection"
            })
        }
    }
}
module.exports = apiProductController
