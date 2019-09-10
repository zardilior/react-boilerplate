import React, { Component} from "react";
import { hot } from "react-hot-loader";
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class DatosPersonales extends Component{
    format(str){
        return str 
          // insert a space before all caps
          .replace(/([A-Z])/g, ' $1')
          // uppercase the first character
          .replace(/^./, function(str){ return str.toUpperCase(); })
    }
  render(){
      return (
      <Container>
          <List>
              {Object.keys(this.props.alumno).map((keyName,i)=>
                  <ListItem key={i}> 
                      <b>{ this.format(keyName) }</b>:  { this.props.alumno[keyName] } 
                  </ListItem>
              )}
          </List>
      </Container>
      )
  }
}

export default hot(module)(DatosPersonales);
