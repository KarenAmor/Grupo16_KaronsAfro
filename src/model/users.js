const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersDb = require('./users.json');

const usersModel = {
    create: (name, lastName, email, pass, confirmedPass, avatar) => {
        let lastUser = usersDb.pop()
        usersDb.push(lastUser)
        let newUser = {
            id: lastUser.id + 1,
            Name: name,
            LastName: lastName,
            Email: email,
            Password: bcrypt.hashSync(pass, 10),
            ConfirmPassword: bcrypt.hashSync(confirmedPass, 10),
            Avatar: avatar ? avatar.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpU1XgDizdfgZP4trNrHeUxVxF6Pmz2tLvA&usqp=CAU",
            Role: 2
        }
        usersDb.push(newUser)
        let usersJson = JSON.stringify(usersDb, null, 4)
        fs.writeFileSync(path.resolve(__dirname, "./users.json"), usersJson)
    },
    access: (email, pass) => {
        let user = usersDb.filter(user => user.Email == email && bcrypt.compareSync(pass, user.Password))[0]
        return user;
    }
}

module.exports = usersModel;