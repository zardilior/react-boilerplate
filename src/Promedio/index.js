import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Promedio extends Component{
  render(){
    return(
        <span>
            <b>Promedio: </b> {this.props.calificaciones.reduce((a,b)=>a+b)/this.props.calificaciones.length}
        </span>
    );
  }
}

export default hot(module)(Promedio);
