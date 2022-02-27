const productModel = require('../../database/models');

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
            console.error(error)
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
            console.error(error)
            res.json({
                status: 500,
                messague: error.messague || "bad server connection"
            })
        }

    }
}
module.exports = apiProductController
