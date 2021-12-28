
import React from "react";
import Tarjeta from "./Tarjetas";

let productosInDB = {
    title: 'Productos en Base de Datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fas fa-clipboard-list'
}

let clientesInDb = {
    title: 'Clientes en Base de Datos', 
    color:'success', 
    cuantity: '79',
    icon:'fas fa-user-check'
}

let tarjetasProps = [productosInDB,clientesInDb]

function ContainerTarjetas(){

    return (

        <div className="tarjetas-container">

               {tarjetasProps.map( (product, i) => {

               return <Tarjeta {...product} key={i}/>

          })}
           
                             
        </div>
    )

}

export default ContainerTarjetas;