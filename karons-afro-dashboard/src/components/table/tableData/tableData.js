import React from "react";


function TableData(props) {
    // let [countries, setCountries]=useState([])

    // let callApi=async()=>{
    //     try {
    //         let call=await fetch("https://restcountries.com/v3.1/all")
    //         let result= call.json()
    //         return result
    //     } catch (error) {
    //         throw "Ocurrio un error"
    //     }
    // }

    // useEffect(async()=>{
    //     const paises=await callApi()
    //     setCountries([...countries,...paises])
    // },[]);

    // const lista=countries
    
    // const fin=lista ? lista.map(pais=><td> {pais.name.common} </td>) : "Cargando...";
    return (
        
        <tr>
            <td>{props.titulo}</td>
            <td>{props.precio}</td>
            <td>{props.referencia}</td>
            <td>{props.cantidad}</td> 
            {/* <td>{props.datos}</td>
            {/* {props.datos.map(name=><td>{name}</td>)} */}
            
        </tr>
    )
}

export default TableData;