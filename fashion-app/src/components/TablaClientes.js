import React from "react";
import CeldasTabla from "./CeldasTabla";

let tableRowsData = [
    
    {
        Id: '1',
        Nombre: 'Jose',
        Apellido: 'Perez',
        Mail: 'joseperez@hotmail.com',
       
    },
    {
        Id: '2',
        Nombre: 'Juan',
        Apellido: 'Gonzalez',
        Mail: 'juangonzalez@hotmail.com',
    },
    
]


function TablaClientes(){

    return (

        <div className="tablaClientes-container">

            <div>                 
             <h1 className="titulo-centrado">Listado de Clientes</h1>
            </div>  

            <div>            
               <table>   
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                    
                         {tableRowsData.map( ( row , i) => {
                                return <CeldasTabla { ...row} key={i}/>
                        })
                        }   

                </table>

            </div>
                                                          
        </div>  

    )

}

export default TablaClientes;