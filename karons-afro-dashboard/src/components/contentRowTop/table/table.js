import React from "react";
import TableData from "./tableData/tableData";
import {useState,useEffect} from 'react'

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
    // let [countries, setCountries]=useState([])

    // let callApi=async()=>{
    //     try {
    //         let call=await fetch("https://restcountries.com/v3.1/all")
    //         let result= call.json()
    //         return result
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // useEffect(async()=>{
    //     const paises=await callApi()
    //     setCountries([...countries,...paises])
    // },[]);

    // const lista=countries
    
    //  const fin=lista ? lista.map(pais=> pais.name.common ) : "Cargando...";
     
    let {products,setProducts} = useState([])
    let callApiProducts= async()=>{
        try {
            let call= await fetch("http://localhost:4000/api/products")
            let result=call.json()
            return result
        } catch (error) {
            throw error
        }
    }

    let {users, setUsers} = useState([])
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
        let productsResult=await callApiProducts()
        setProducts(...products, ...productsResult)

        let usersResult=await callApiUsers()
        setUsers(...users, ...usersResult)
    },[]);
    
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
                           return  <TableData
                            titulo={dato.titulo}
                            precio={dato.precio}
                            referencia={dato.referencia}
                            cantidad={dato.cantidad}
                            key={dato.titulo + index}
                            // datos={fin}
                            
                        ></TableData>
                     }) 
                     } 
                </tbody>            
        </table>
    )
}

export default Table;