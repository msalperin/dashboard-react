import React from "react";
import Productos from "./Productos";



let productosTotal = ["Aros de Plata", "Anillo", "Cadena", "Collar"]

function TablaProductos(){

    return (

        <div className="tablaProductos-container">

           <h1 className="titulo-centrado">Productos</h1>

           <div className="tablaProductos">

                {productosTotal.map( (product, i) => {

                   return <Productos {...product} key={i}/>
    
            })}



           </div>

        </div>
    )

}

export default TablaProductos;