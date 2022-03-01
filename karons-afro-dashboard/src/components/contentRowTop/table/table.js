import React from "react";
import TableData from "./tableData/tableData";
// import { useState, useEffect } from 'react'

function Table() {

    // const [users, setUsers] = useState([])
    // let callApiUsers = async ()=>{
    //     try {
    //         let call= await fetch("http://localhost:4000/api/users")
    //         let result=call.json()
    //         return result
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // useEffect(async()=>{
    //     let usersResult=await callApiUsers()
    //     setUsers([usersResult])
    // },[]);

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
            <TableData></TableData>
        </table>
    )
}

export default Table;