import React from 'react';
import ContentRowKaronsDb from './contentRowKaronsDb/ContentRowKaronsDb';
import NewProduct from './newProduct/newProduct';
import Categories from './categories/categories';
import { Route, Routes } from "react-router-dom";
import Table from './table/table';
import Error from './error404/error404'
import Home from './home/home'
import { useState, useEffect } from 'react';

function ContentRowTop() {

    const [totalProducts, setProducts] = useState([])
    const [totalUsers, setUsers] = useState([])
    const [productsAmount, setproductsAmount] = useState([])
    const [lastproduct, setNewProduct] = useState([])

    let callApiProducts = async () => {
        try {
            const call = await fetch("https://grupo16-karonsafro.herokuapp.com/api/products")
            const result = await call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    let callApiUsers = async () => {
        try {
            let call = await fetch("https://grupo16-karonsafro.herokuapp.com/api/users")
            let result = await call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    let callApiProductsAmount = async () => {
        try {
            let call = await fetch("https://grupo16-karonsafro.herokuapp.com/api/products-in-categories")
            let result = await call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    let callApiNewProduct = async () => {
        let call = await fetch("https://grupo16-karonsafro.herokuapp.com/api/lastProduct")
        let result = call.json()
        return result
    }

    useEffect(async () => {
        let products = await callApiProducts()
        setProducts([products])

        let users = await callApiUsers()
        setUsers([users])

        let productsAmount = await callApiProductsAmount()
        setproductsAmount([productsAmount])

        let newProduct = await callApiNewProduct()
        setNewProduct([newProduct])
    }, []);

    const totalP = totalProducts[0]

    const totalU = totalUsers[0]

    const amount = productsAmount[0]

    const lastProduct = lastproduct[0]

    let contentArray = [
        {
            titulo: "TOTAL DE PRODUCTOS REGISTRADOS",
            cifra: totalP ? totalP.count : <p>Cargando datos...</p>,
            color: "primary",
            icono: "film"
        },
        {
            titulo: "TOTAL DE USUARIOS REGISTRADOS",
            cifra: totalU ? totalU.count : <p>Cargando datos...</p>,
            color: "success",
            icono: "award"
        },
        {
            titulo: "TOTAL DE CATEGORÍAS",
            cifra: 4,
            color: "warning",
            icono: "user"
        }
    ]

    const categoriesArray = [
        {
            categoria: "Piel",
            cantidad: amount ? amount.totalProductsInSkin : <p>Cargando datos...</p>
        },
        {
            categoria: "Cabello",
            cantidad: amount ? amount.totalProductsInHair : <p>Cargando datos...</p>
        },
        {
            categoria: "Maquillaje",
            cantidad: amount ? amount.totalProductsInMakeUp : <p>Cargando datos...</p>
        },
        {
            categoria: "Accesorios",
            cantidad: amount ? amount.totalProductsInAccessories : <p>Cargando datos...</p>
        },
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/totales" element={contentArray.map((card, index) => {
                        return <ContentRowKaronsDb
                            titulo={card.titulo}
                            cifra={card.cifra}
                            color={card.color}
                            icono={card.icono}
                            key={card.titulo + index} />
                    })} />
                    <Route path="/newProduct" element={<NewProduct titulo='Nuevo Producto!!!'
                        texto={lastProduct ? lastProduct.metaData.newProduct.name : "cargando..."}
                        img={lastProduct ? lastProduct.metaData.newProduct.image : "cargando..."}
                        descripcion={lastProduct ? lastProduct.metaData.newProduct.description : "cargando..."} />} />
                    {/* <NewProduct titulo='Nuevo Producto!!!' texto={lorem} img={newProduct}></NewProduct>*/}

                    <Route path="/categories" element={<Categories categ={categoriesArray} />} />
                    {/* <Categories categ={categoriesArray}></Categories> */}

                    <Route path="/productList" element={<Table />} />
                    {/* <Table></Table> */}

                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </div>
    )
}

export default ContentRowTop;