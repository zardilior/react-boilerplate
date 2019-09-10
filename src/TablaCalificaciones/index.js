import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { Container,Table,TableHead,TableBody,TableRow,TableCell } from '@material-ui/core';
import Promedio from "../Promedio/"

class App extends Component{
  render(){
    return(
        <Container>
          <Table>
        <TableHead>
          <TableRow>
            <TableCell>
                Calificaciones
            </TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
                <TableRow key="1">
                    {this.props.calificaciones.map((item)=>
                      <TableCell> 
                        {item}
                      </TableCell>    
                    )}
                </TableRow>
                <TableRow key="2">
                      <TableCell> 
                          <Promedio 
                            calificaciones={this.props.calificaciones}>
                          </Promedio>
                      </TableCell>    
                </TableRow>
            </TableBody>
          </Table>
        </Container>
    )
  }
}

export default hot(module)(App);
