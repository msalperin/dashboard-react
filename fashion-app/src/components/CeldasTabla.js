import React from 'react';


function CeldasTabla(props){

    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>{props.Nombre}</td>
                    <td>{props.Apellido}</td>
                    <td>{props.Mail}</td>
                </tr>
            )
    }
    
        

export default CeldasTabla;