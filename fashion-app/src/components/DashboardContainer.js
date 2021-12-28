import React from "react";
import ContainerTarjetas from "./ContainerTarjetas";
import ContainerProductos from "./ContainerProductos";


function DashboardContainer(){

    return (
        
        <div className="dashboard-container">

            <ContainerTarjetas></ContainerTarjetas>
            <ContainerProductos></ContainerProductos>

        </div>

    )

}

export default DashboardContainer;