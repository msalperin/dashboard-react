import React from "react";
import Tarjeta from "./Tarjetas";


class PruebaApi extends React.Component{
    
    constructor(){
        super()
        this.state = {
            users: "",
     
        }
    }

    componentDidMount(){
        console.log('Se monto')
         fetch('https://rickandmortyapi.com/api/character')      
        .then(respuesta => respuesta.json())
        .then(data => {
            this.setState({
               users: data.results
            })
        })

    }
    

    render (){

      return (
          <div>
              <h2>Productos</h2>
              <ul>
                  {this.state.users.map((user,i) => 
                    <li key={i}>
                        <h4>{user.name}</h4>
                    </li>
                  )}
              </ul>
          </div>
      )
    }
    
}


export default PruebaApi;