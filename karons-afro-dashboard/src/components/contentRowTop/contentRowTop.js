import React from 'react';
import ContentRowKaronsDb from './contentRowKaronsDb/ContentRowKaronsDb';
import newProduct from '../../img/crema_de_peinar.jpg';
import NewProduct from './newProduct/newProduct';
import Categories from './categories/categories';
import { Route, Routes } from "react-router-dom";
import Table from './table/table';
import Error from './error404/error404'
import Home from './home/home'





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