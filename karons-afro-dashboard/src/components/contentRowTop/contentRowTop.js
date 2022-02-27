import React from 'react';
import ContentRowKaronsDb from './contentRowKaronsDb/ContentRowKaronsDb';
import newProduct from '../../img/crema_de_peinar.jpg';
import NewProduct from './newProduct/newProduct';
import Categories from './categories/categories';
import { Route, Routes } from "react-router-dom";
import Table from './table/table';
import Error from './error404/error404'
import Home from './home/home'
import {useState,useEffect} from 'react';

let contentArray = [
    {
        titulo: "TOTAL DE PRODUCTOS REGISTRADOS",
        cifra: 8,
        color: "primary",
        icono: "film"
    },
    {
        titulo: "TOTAL DE USUARIOS REGISTRADOS",
        cifra: 5,
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

let lorem = "adawfqffef"
const categoriesArray=[
    {
        categoria: "Piel",
        cantidad: 2
    },
    {
        categoria: "Cabello",
        cantidad: 2
    },
    {
        categoria: "Maquillaje",
        cantidad: 2
    },
    {
        categoria: "Accesorios",
        cantidad: 2
    },
];

function ContentRowTop() {
    let {totalProducts, setProducts} = useState()
    let {totalUsers, setUsers} = useState()

    let callApiProducts= async()=>{
        try {
            let call= await fetch("http://localhost:4000/api/products")
            let result=call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    let callApiUsers = async ()=>{
        try {
            let call= await fetch("http://localhost:4000/api/users")
            let result=call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    useEffect(async()=>{
        let products=await callApiProducts()
        setProducts(products.count)

        let users=await callApiUsers()
        setUsers(users.count)
    },[]);
    const list=totalProducts
    console.log(list);
    const listu=totalUsers
    console.log(listu);
    return (
        <div className="container-fluid">

            {/* <div className="row">
                {contentArray.map((card, index) => {
                    return <ContentRowKaronsDb
                        titulo={card.titulo}
                        cifra={card.cifra}
                        color={card.color}
                        icono={card.icono}
                        key={card.titulo + index} />
                })}
            </div> */}


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
                        })}/>

                    <Route path="/newProduct" element={<NewProduct titulo='Nuevo Producto!!!' texto={lorem} img={newProduct} />} />
                    {/* <NewProduct titulo='Nuevo Producto!!!' texto={lorem} img={newProduct}></NewProduct>                 */}
                    
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