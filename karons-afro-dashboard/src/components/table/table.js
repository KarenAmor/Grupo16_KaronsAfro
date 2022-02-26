import React from "react";
import TableData from "./tableData/tableData";

let contentTable = [
    {
        titulo: "Aceite Ricino",
        precio: 30,
        referencia: "11-212",
        cantidad: 3,        
    },
    {
        titulo: "Aretes",
        precio: 23,
        referencia: "12-212",
        cantidad: 5,
    },

]

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Referencia</th>
                    <th scope="col">Cantidad</th>                    
                </tr>
                </thead>
                <tbody>
                    {contentTable.map((dato, index) => {
                        return <TableData
                            titulo={dato.titulo}
                            precio={dato.precio}
                            referencia={dato.referencia}
                            cantidad={dato.cantidad}
                            key={dato.titulo + index}
                        ></TableData>
                    })
                    }
                </tbody>            
        </table>
    )
}

export default Table;