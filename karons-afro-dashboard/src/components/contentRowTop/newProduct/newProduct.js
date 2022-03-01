import React from "react"
import { useState, useEffect } from 'react'

function NewProduct(props) {
    let [lastProduct, setlastProduct] = useState([]);

    useEffect(() => {
        setlastProduct = [props.titulo, props.img, props.texto]
    }, []);

    let product = lastProduct ?
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">{props.titulo}</h5>
            </div>
            <div className="card-body">
                <div className="">
                    <img className="img-fluid mt-3 mb-4" src={props.img} alt="New Product " />
                </div>
                <p>{props.texto}</p>
                <p>{props.descripcion}</p>
            </div>
        </div>
        : <p>Buscando producto...</p>

    return (
        <div className="col-lg-6 mb-4">
            {product}
        </div>
    )
}

export default NewProduct;