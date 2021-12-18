
const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT ||3000;
const methodOverride = require('method-override')

const rutas = require("./routers/main.js")
const users = require("./routers/user.js")

app.set('view engine', 'ejs');

app.set('views',path.resolve(__dirname,"./views"));

app.use(express.static('public'))

const publicFolderPath= path.resolve(__dirname, './public')
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicFolderPath));
app.use(methodOverride('_method'));

app.use('/', rutas);
app.use('/', users);



app.listen(port, ()=> console.log(`Servidor corriendo ${port}`))


