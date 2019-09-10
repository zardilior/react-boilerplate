import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import DatosPersonales from "./DatosPersonales/";
import TablaCalificaciones from "./TablaCalificaciones/";
import Datos from "./Datos/";

class App extends Component{
  constructor(){
      super();
      this.state = {
        datos:Datos
      }
  }
  render(){
    return(
      <div className="App">
        <DatosPersonales 
            alumno={this.state.datos.alumno}>
        </DatosPersonales>
        <TablaCalificaciones 
            calificaciones={this.state.datos.calificaciones}>
        </TablaCalificaciones>
      </div>
    );
  }
}

export default hot(module)(App);
