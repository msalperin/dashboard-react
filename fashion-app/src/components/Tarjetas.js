import React from "react";
import PropTypes from 'prop-types';


function Tarjeta(props){

    return (
        
        <div className="tarjeta ">
          
          <div className="tarjeta-contenido">

            <h3>{props.title}</h3>
            <h4>Total: {props.cuantity}</h4>
            <div>
               <i className={`${props.icon}`}></i>
            </div>
          
          </div>   


        </div>
        

    )

}

export default Tarjeta;