import React from 'react';
import ContentRowKaronsDb from './contentRowKaronsDb/ContentRowKaronsDb';
import newProduct from '../../img/crema_de_peinar.jpg';
import NewProduct from './newProduct/newProduct';
import Categories from './categories/categories';

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
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Menú principal</h1>
            </div>

            <div className="row">
                {contentArray.map((card, index) => {
                    return <ContentRowKaronsDb
                        titulo={card.titulo}
                        cifra={card.cifra}
                        color={card.color}
                        icono={card.icono}
                        key={card.titulo + index} />
                })}
            </div>


            <div className="row">

                <NewProduct titulo='Nuevo Producto!!!' texto={lorem} img={newProduct}></NewProduct>                
            </div>
            <Categories categ={categoriesArray}></Categories>
        </div>
    )
}

export default ContentRowTop;