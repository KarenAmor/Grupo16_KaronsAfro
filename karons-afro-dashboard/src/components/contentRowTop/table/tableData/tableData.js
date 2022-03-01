import React from "react";
import { useState, useEffect } from 'react'

function TableData() {

    const [products, setProducts] = useState([])
    let callApiProducts = async () => {
        try {
            let call = await fetch("http://localhost:4000/api/products")
            let result = await call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    useEffect(async () => {
        let productsResult = await callApiProducts()
        setProducts([productsResult])

    }, []);

    let allProducts = products[0]

    let data = allProducts ? allProducts.products.map((data, index) => {
        return <tr>
            <td key={data + index}>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.reference}</td>
            <td>{data.quantity}</td>
        </tr>

    }) : <h5>Cargando datos...</h5>

    return (
        <tbody>
            {data}
        </tbody>
    )
}

export default TableData;