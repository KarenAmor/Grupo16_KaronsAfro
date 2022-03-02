import './home.css';
import React from "react";
// import logo from '../../../img/muñeca.jpg';
import gif from '../../../img/gif.gif';



function Home(props) {
    return (
       
        <><h1 className="col-lg-6 mb-4 welcome">BIENVENIDO(A) AL DASHBOARD DE KARONSAFRO</h1><></>
        <div>
            <img className="gif" src={gif} alt="Karons Afro" />

        </div>
        <div className="text-container">
            <h3 className="col-lg-6 mb-4 texto">Selecciona en la barra lateral la opción que desees.</h3>
        </div></>
    )
}

export default Home;