import React from "react";
import Productos from "./Productos";
import { useState, useEffect } from "react";


function TablaProductos(){

    const[productos, setProductos] = useState([]);
    
    useEffect(() => {
        console.log('Se monto')
        fetch('http://localhost:4000/api/products')
          .then(response => response.json())
          .then(result => {
              setProductos(result.data)
          })
          .catch(error => console.log(error))
    }, [])



    return (

        <div className="tablaProductos-container">

           <h1 className="titulo-centrado">Productos</h1>

           <div className="tablaProductos">

                {productos.map( (product, i) => {

                   return <Productos {...product} key={i}/>
    
            })}



           </div>

        </div>
    )

}

export default TablaProductos;