const usersModel = require('../../database/models');

const apiUserController = {
    'getById': async (req, res) => {
        try {
            const id = req.params.id
            let user = await usersModel.User.findOne({
                where: {
                    id: id
                }
            })
            const subset = (({ id, name, email, avatar }) => ({ id, name, email, avatar }))(user.dataValues)
            res.json({
                status: 200,
                ...subset
            })
        } catch (error) {
            // console.error(error)
            res.json({
                status: 400,
                messague: error.messague || "user doesn't exist or bad connection"
            })
        }
    },
    'list': async (req, res) => {
        try {
            let users = await usersModel.User.findAll()
            let registerUsers = []
            users.forEach(user => {
                // put the filter logic here
                const userValue = user.dataValues
                const subset = (({ id, name, email, avatar }) => ({ id, name, email, avatar }))(userValue)
                registerUsers.push(subset)
            });
            
            res.json({
                status: 200,
                count: registerUsers.length,
                users: registerUsers,
                url: 'api/users'
            }
            )
        } catch (error) {
            // console.error(error)
            res.json({
                status: 500,
                messague: error.messague || "bad server connection"
            })
        }

    }
}
module.exports = apiUserController

