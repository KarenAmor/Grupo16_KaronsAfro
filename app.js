<<<<<<< HEAD
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT ||3000;
const publicFolderPath= path.resolve(__dirname, './public')
app.use(express.static(publicFolderPath));

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/', (req, res)=> {
    res.sendFile(post.resolve(__dirname, './views/home.html'));
});
app.get('/cabello', (req, res)=> {
    res.sendFile(path.join(__dirname, './views/cabello.html'));
});
app.get('/piel', (req, res)=> {
    res.sendFile(path.join(__dirname, './views/piel.html'));
});
app.get('/maquillaje', (req, res)=> {
    res.sendFile(path.join(__dirname, './views/maquillaje.html'));
});
app.get('/accesorios', (req, res)=> {
    res.sendFile(path.join(__dirname, './views/accesorios.html'));
});

app.get(('/register'), (req, res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));
})


app.listen(port, ()=> console.log(`Servidor corriendo ${port}`))
=======
const express = require ('express');
const path = require ('path');
const app = express ();
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname,"./public")));

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get("/cabelloDetail",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/cabelloDetail.html"))
});

app.get("/productCart",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

app.listen(port, () => console.log ('servidor corriendo en puesto 3000'));
>>>>>>> bd39b78ad3f060efb5c6c6dbfeecaf3b0ecc491a
