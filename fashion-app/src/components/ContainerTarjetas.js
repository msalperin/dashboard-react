import React from "react";
import Tarjeta from "./Tarjetas";
import { useState, useEffect } from "react";

function ContainerTarjetas() {
    
    const[totalProductos, setTotalProductos] = useState([]);
    const[totalClientes, setTotalClientes] = useState([]);

    useEffect(() => {
        console.log('Se monto')
        fetch('http://localhost:4000/api/products')
        .then(response => response.json())
          .then(result => {
              setTotalProductos(result.total)
          })
          .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('Se monto 2')
        fetch('http://localhost:4000/api/users')
        .then(response => response.json())
          .then(result => {
              setTotalClientes(result.total)
          })
          .catch(error => console.log(error))
    }, [])

    let productosInDB = {
        title: 'Productos en Base de Datos',
        color: 'primary', 
        cuantity: totalProductos,
        icon: 'fas fa-clipboard-list'
    }
    
    let clientesInDb = {
        title: 'Clientes en Base de Datos', 
        color:'success', 
        cuantity: totalClientes,
        icon:'fas fa-user-check'
    }

    let tarjetasProps = [productosInDB,clientesInDb];
    

    return (

        <div className="tarjetas-container">
            
            {tarjetasProps.map((product, i) => {

                return <Tarjeta {...product} key={i}/>

            })}

        </div>    
    )    
    

    
}


export default ContainerTarjetas;