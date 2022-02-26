const bcrypt = require('bcryptjs');
const usersDb=require('../database/models');


const usersModel = {

    /* CREATE USER */
    createUser: (first_name,last_name,email,pass,confirmedPass,avatar)=>{
        try {
            usersDb.User.create({
                name: first_name,
                lastname: last_name,
                email: email,
                password: bcrypt.hashSync(pass, 10),
                confirmarPassword: bcrypt.hashSync(confirmedPass, 10),                
                avatar: avatar.filename,
                rol: 2
            })            
        } catch (err) {
            // console.log(err);            
            return new error
        }        

    },

    /* LOGIN */

    access: async(email) => {        
        try {
            let user= await usersDb.User.findOne({
                where:{
                    email: email
                }
            })
            return user;
        } catch (err) {
            // console.log(err);
            return new error
        }
    }, 

    /* EDIT USER */

    editOneUser: async(id)=>{
        try {
            let user =await usersDb.User.findByPk(id);
            return user; 
        } catch (err) {
            // console.log(err);
            return new error
        }        
    },

    updateUser: async (id,first_name,last_name,email,avatar)=>{
        
        try {
            await usersDb.User.update({
                name: first_name,
                lastname: last_name,
                email: email,
                avatar: /*avatar ?*/ avatar.filename /*: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU"*/
            },{
                where: {id: id}  
              })            
        } catch (err) {
            // console.log(err);     
            return new error       
        }       

    },

     /* DETAIL USER */

     detail: async(email)=>{
        try {
            let idDetailUser = await usersDb.User.findOne({
                where: {
                    email: email
                }
            });
            return idDetailUser;
        } catch (err) {
            // console.log(err);
            return new error
        }        
    }
}

module.exports = usersModel;