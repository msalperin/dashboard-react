import React from "react";
import CeldasTabla from "./CeldasTabla";
import { useState, useEffect } from "react";


function TablaClientes(){

    const[usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
        console.log('Se monto')
        fetch('http://localhost:4000/api/users')
          .then(response => response.json())
          .then(result => {
              setUsuarios(result.data)
          })
          .catch(error => console.log(error))
    }, [])


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
                    
                         {usuarios.map( ( row , i) => {
                                return <CeldasTabla { ...row} key={i}/>
                        })
                        }   

                </table>

            </div>
                                                          
        </div>  

    )

}

export default TablaClientes;