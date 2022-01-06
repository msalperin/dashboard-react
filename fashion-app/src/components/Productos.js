import React from "react";


function Productos(props){

    return (

        <div className="tarjetas-tablaProducto">

              <a href={props.detailUrl}><h1>{props.name}</h1></a>

        </div>
    
    )

}

export default Productos;