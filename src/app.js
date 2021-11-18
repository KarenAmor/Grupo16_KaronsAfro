
const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT ||3000;
const methodOverride = require('method-override')

const rutas = require("./routers/main.js")

app.set('view engine', 'ejs');

app.set('views',path.resolve(__dirname,"./views"));

app.use(express.static('public'))

const publicFolderPath= path.resolve(__dirname, './public')

app.use(express.static(publicFolderPath));
app.use(methodOverride('_method'));

app.use('/', rutas);
app.use('/login', rutas);
app.use('/cabello', rutas);
app.use('/piel', rutas);
app.use('/maquillaje', rutas);
app.use('/accesorios', rutas);
app.use('/register', rutas);
app.use('/carrito_compras', rutas);
app.use('/quienesSomos', rutas);
app.use('/administrador', rutas);
app.use('/addProduct', rutas);
app.use('/editProduct', rutas);

// app.use('/administrador/update/:id', rutas);
// app.use('/administrador/delete/:id', rutas);


app.listen(port, ()=> console.log(`Servidor corriendo ${port}`))



// app.get('/', (req, res)=> {
//     res.sendFile(path.resolve(__dirname, './views/home.html'));
// });

// app.get("/login",(req,res)=>{
//     res.sendFile(path.resolve(__dirname, "./views/login.html"))
// });
// app.get('/cabello', (req, res)=> {
//     res.sendFile(path.join(__dirname, './views/cabello.html'));
// });
// app.get('/piel', (req, res)=> {
//     res.sendFile(path.join(__dirname, './views/piel.html'));
// });
// app.get('/maquillaje', (req, res)=> {
//     res.sendFile(path.join(__dirname, './views/maquillaje.html'));
// });
// app.get('/accesorios', (req, res)=> {
//     res.sendFile(path.join(__dirname, './views/accesorios.html'));
// });

// app.get(('/register'), (req, res) =>{
//     res.sendFile(path.join(__dirname, './views/register.html'));
// })

// app.get(('/carrito_compras'), (req, res) =>{
//     res.sendFile(path.join(__dirname, './views/productCart.html'));
// })

// app.get('/quienesSomos', (req, res)=> {
//     res.sendFile(path.join(__dirname, './views/quienesSomos.html'));
// });

// app.get('/administrador', (req, res)=> {
//     res.sendFile(path.join(__dirname, './views/administrador.html'));
// });



