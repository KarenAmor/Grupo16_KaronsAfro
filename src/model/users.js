const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
// const usersDb = require('./users.json');
const usersDb=require('../database/models');


const usersModel = {

    /* CREATE USER */

    // create: (name, lastName, email, pass, confirmedPass, avatar) => {
    //     let lastUser = usersDb.pop()
    //     usersDb.push(lastUser)
    //     let newUser = {
    //         id: lastUser.id + 1,
    //         Name: name,
    //         LastName: lastName,
    //         Email: email,
    //         Password: bcrypt.hashSync(pass, 10),
    //         ConfirmPassword: bcrypt.hashSync(confirmedPass, 10),
    //         Avatar: avatar ? avatar.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU",
    //         Role: 2
    //     }
    //     usersDb.push(newUser)
    //     let usersJson = JSON.stringify(usersDb, null, 4)
    //     fs.writeFileSync(path.resolve(__dirname, "./users.json"), usersJson)
    // },
    create: (first_name,last_name,email,pass,confirmedPass,role,avatar)=>{

        try {
            usersDb.User.create({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: bcrypt.hashSync(pass, 10),
                confirmacionPassword: bcrypt.hashSync(confirmedPass, 10),
                role: role,
                avatar: avatar ? avatar.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU",
            })            
        } catch (error) {
            console.log(error);
            
        }        

    },

    /* LOGIN */

    access: (email, pass) => {
        let user = usersDb.filter(user => user.Email == email && bcrypt.compareSync(pass, user.Password))[0]
        return user;
    }, 

    /* EDIT USER */

    editOne: async(id)=>{
        try {
            let user =await usersDb.User.findByPk(id);
            return user; 
        } catch (error) {
            console.log(error);
        }        
    },  

    update: (first_name,last_name,email,pass,confirmedPass,role,avatar)=>{

        try {
            usersDb.User.update({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: bcrypt.hashSync(pass, 10),
                confirmacionPassword: bcrypt.hashSync(confirmedPass, 10),
                role: role,
                avatar: avatar ? avatar.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU",
            })            
        } catch (error) {
            console.log(error);
            
        }       

    },

     /* DETAIL USER */

    detail: async(id)=>{
        try {
            let idDetailUser = await usersDb.User.findByPk(id);
            return idDetailUser;
        } catch (error) {
            console.log(error);
        }        
    },

    

}

module.exports = usersModel;