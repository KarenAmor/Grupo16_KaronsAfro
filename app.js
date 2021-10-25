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