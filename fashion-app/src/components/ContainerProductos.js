import React from "react";
import TablaProductos from "./TablaProductos";
import UltimoProducto from "./UltimoProducto";


function ContainerProductos(){

    return (

        <div className="productos-container">
              
              <TablaProductos></TablaProductos>
              <UltimoProducto></UltimoProducto>
                          
        </div>
    )

}

export default ContainerProductos;