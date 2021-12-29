import React from "react";
import Tarjeta from "./Tarjetas";


class ContainerTarjetas extends React.Component{
    
    constructor(){
        super()
        this.state = {
            usersTotal: 0,
            productsTotal:0
        }
    }

    componentDidMount(){
        let cantUsuarios = fetch('http://localhost:4000/api/users')      
        .then(respuesta => {return respuesta.json()})
        Promise.all([cantUsuarios])
        .then(([cantUsuarios]) => {
            this.setState ({usersTotal: cantUsuarios.total})

        })
    }

    render (){

        let valor;

        if(this.state.usersTotal === ''){
           valor = <p>Cargando</p>
        } else {

            let productosInDB = {
                title: 'Productos en Base de Datos',
                color: 'primary', 
                cuantity: 21,
                icon: 'fas fa-clipboard-list'
            }
            
            let clientesInDb = {
                title: 'Clientes en Base de Datos', 
                color:'success', 
                cuantity: this.state.usersTotal,
                icon:'fas fa-user-check'
            }

            let tarjetasProps = [productosInDB,clientesInDb];

            valor =  tarjetasProps.map( (product, i) => {

                return <Tarjeta {...product} key={i}/>

            })
                
    }

    return (
     
        
        <div className="tarjetas-container">

          {valor}           
                             
        </div>
      
    )

}
}


export default ContainerTarjetas;