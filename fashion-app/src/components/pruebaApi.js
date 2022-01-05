import React from "react";
import { useState, useEffect } from "react";

function Rick(){

    const[usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
        console.log('Se monto')
        fetch('http://localhost:4000/api/users')
          .then(response => response.json())
          .then(result => {
              setUsuarios(result.data)
              console.log(setUsuarios)
          })
          .catch(error => console.log(error))
    }, [])
  
    return(
  
         <div>
               
            
          <ul>
              
               {usuarios.length === 0 && <p>Cargando</p>}
      
               {usuarios.map((usuario,i) => {
                  return <li key={i}>
                      <h3>{usuario.first_name}</h3>
                      <h3>{usuario.email}</h3>
                      </li>
                })}
  
          </ul>
  
          
             {/*  {usuarios.length === 0 && <p>Cargando</p>}
        
              {usuarios.map((usuario,i) => {
                  return <li key={i}>
                      <h3>{usuario.first_name}</h3>
                      </li>
                })} */}
          
          
        </div>
    )
  
  }
  
  export default Rick