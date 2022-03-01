const express = require ('express');
const app = express();
const path = require('path');
const port = process.env.PORT ||4000;
const methodOverride = require('method-override')
const session=require('express-session');
const cors = require("cors");

const rutas = require("./routers/main.js");
const products = require("./routers/products.js");
const usuario = require("./routers/user.js");
const userLoggedMiddleware=require("./middlewares/userLoggedMiddleware");
const apiUsers = require("./routers/routerAPI/apiUserRouter")
const apiProducts = require("./routers/routerAPI/apiProductRouter")

app.set('view engine', 'ejs');

app.set('views',path.resolve(__dirname,"./views"));

app.use(express.static('public'));
const publicFolderPath= path.resolve(__dirname, './public');

app.use(express.urlencoded({extended:false}));
app.use(express.static(publicFolderPath));
app.use(methodOverride('_method'));
app.use(session({secret: "Shhhh... Fran and Mati don't have to know it...", resave: false, saveUninitialized: false}));
app.use(userLoggedMiddleware);
app.use(express.json());
app.use(cors());

app.use('/', rutas);
app.use('/',products);
app.use('/', usuario);
app.use('/', apiUsers);
app.use('/', apiProducts);

app.use((req, res, next)=>{
    res.status(404).render('error');
  });

app.listen(port, ()=> console.log(`Servidor corriendo ${port}`))




