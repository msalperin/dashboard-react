import React from "react";
import ContainerTarjetas from "./ContainerTarjetas";
import ContainerProductos from "./ContainerProductos";
import ContainerClientes from "./ContainerClientes";
import PruebaApi from "./pruebaApi";


function DashboardContainer(){

    return (
        
        <div className="dashboard-container">

            <ContainerTarjetas></ContainerTarjetas>
            <ContainerProductos></ContainerProductos>
            <ContainerClientes></ContainerClientes>
            
            

        </div>

    )

}

export default DashboardContainer;